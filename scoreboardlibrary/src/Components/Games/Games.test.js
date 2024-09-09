import { render, screen } from "@testing-library/react";
import Game from "./Games";
import { useGameContext } from "../../Context/GameContext";
import useGameFlow from "../../Hooks/useGameFlow";
import useScoreUpdater from "../../Hooks/useScoreUpdater";

jest.mock("../Context/GameContext");
jest.mock("../Hooks/useGameFlow");
jest.mock("../Hooks/useScoreUpdater");

describe("Game Component", () => {
  const mockGame = {
    id: "game1",
    homeScore: 2,
    awayScore: 1,
    homeTeam: "Spain",
    awayTeam: "Italy",
  };

  beforeEach(() => {
    useGameContext.mockReturnValue({
      state: { games: [mockGame] },
    });

    useGameFlow.mockReturnValue({ status: "Playing" });
    useScoreUpdater.mockReturnValue(jest.fn());
  });

  it("should render the game with the correct score", () => {
    render(<Game gameId="game1" homeTeam="Spain" awayTeam="Italy" />);

    expect(
      screen.getByRole("heading", { name: /Spain vs Italy/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/Score: 2 - 1/i)).toBeInTheDocument();

  
  });
});

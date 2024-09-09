import { render, screen } from "@testing-library/react";
import WorldCupScoreboard from "./WorldCupScoreboard";
import { useGameContext } from "../../Context/GameContext";
import Game from "./Games";
import GameSummary from "../GameSummary/GameSummary";

jest.mock("../Context/GameContext");
jest.mock("./Games");
jest.mock("./GameSummary");

describe("WorldCupScoreboard Component", () => {
  const mockGames = [
    { id: "game1", homeTeam: "Spain", awayTeam: "Italy", status: "Playing" },
    { id: "game2", homeTeam: "France", awayTeam: "Germany", status: "Finished" },
  ];

  beforeEach(() => {
    useGameContext.mockReturnValue({
      state: { games: mockGames },
    });

    Game.mockImplementation(({ homeTeam, awayTeam }) => (
      <div>
        {homeTeam} vs {awayTeam}
      </div>
    ));
  });

  it("should render Game components for active games", () => {
    render(<WorldCupScoreboard />);

    expect(screen.getByText("Spain vs Italy")).toBeInTheDocument();
    expect(GameSummary).not.toHaveBeenCalled();
  });

  it("should render the GameSummary when all games are finished", () => {
    useGameContext.mockReturnValue({
      state: {
        games: [
          { id: "game1", status: "Finished" },
          { id: "game2", status: "Finished" },
        ],
      },
    });

    render(<WorldCupScoreboard />);

    expect(GameSummary).toHaveBeenCalled();
  });
});

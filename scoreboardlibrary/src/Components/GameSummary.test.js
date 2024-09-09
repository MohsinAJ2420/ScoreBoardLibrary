import { render, screen } from "@testing-library/react";
import GameSummary from "./GameSummary";
import { useGameContext } from "../Context/GameContext";

jest.mock("../Context/GameContext");

describe("GameSummary Component", () => {
  it("should render and sort games by total score, then by added order", () => {
    const mockGames = [
      {
        id: "game1",
        homeTeam: "Real Zaragoza",
        awayTeam: "Valencia",
        homeScore: 2,
        awayScore: 2,
        addedOrder: 1,
      },
      {
        id: "game2",
        homeTeam: "Liverpool",
        awayTeam: "Manchester United",
        homeScore: 2,
        awayScore: 2,
        addedOrder: 2,
      },
      {
        id: "game3",
        homeTeam: "FC Barcelona",
        awayTeam: "Real Madrid",
        homeScore: 3,
        awayScore: 2,
        addedOrder: 3,
      },
    ];

    useGameContext.mockReturnValue({
      state: { games: mockGames },
    });

    render(<GameSummary />);

    const items = screen.getAllByRole("listitem");

    expect(items[0]).toHaveTextContent("FC Barcelona 3 - Real Madrid 2");

    expect(items[1]).toHaveTextContent("Liverpool 2 - Manchester United 2");

    expect(items[2]).toHaveTextContent("Real Zaragoza 2 - Valencia 2");
  });
});

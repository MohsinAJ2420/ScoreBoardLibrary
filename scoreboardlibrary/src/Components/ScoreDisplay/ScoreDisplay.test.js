import { render, screen } from "@testing-library/react";
import ScoreDisplay from "./ScoreDisplay";

describe("ScoreDisplay Component", () => {
  it("should render the correct score and teams", () => {
    render(
      <ScoreDisplay
        homeTeam="Spain"
        awayTeam="Italy"
        homeScore={2}
        awayScore={1}
      />
    );

    expect(screen.getByText("Spain vs Italy")).toBeInTheDocument();
    expect(screen.getByText("Score: 2 - 1")).toBeInTheDocument();
  });
});

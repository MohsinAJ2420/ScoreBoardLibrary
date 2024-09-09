import React from "react";
import { useGameContext } from "../../Context/GameContext";

const GameSummary = () => {
  const { state } = useGameContext();

  const sortedGames = [...state.games]
    .map((game) => ({
      ...game,
      totalScore: game.homeScore + game.awayScore,
    }))
    .sort((a, b) => {
      if (b.totalScore !== a.totalScore) {
        return b.totalScore - a.totalScore;
      }
      return b.startOrder - a.startOrder;
    });


  return (
    <div className="container">
      <div className="match-card">
        <h2>Game Summary</h2>
        <ul>
          {sortedGames.map((game, index) => (
            <li key={index}>
              {game.homeTeam} {game.homeScore} - {game.awayTeam}{" "}
              {game.awayScore}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GameSummary;

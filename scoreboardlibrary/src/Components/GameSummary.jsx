import React from "react";
import { useGameContext } from "../Context/GameContext";

const GameSummary = () => {
  const { state } = useGameContext();

  const sortedGames = [...state.games]
    .map((game) => ({
      ...game,
      totalScore: game.homeScore + game.awayScore 
    }))
    .sort((a, b) => {
      if (b.totalScore !== a.totalScore) {
        return b.totalScore - a.totalScore; 
      }
      return b.addedOrder - a.addedOrder; 
    });

  return (
    <div>
      <h2>Game Summary</h2>
      <ul>
        {sortedGames.map((game, index) => (
          <li key={index}>
            {game.homeTeam} {game.homeScore} - {game.awayTeam} {game.awayScore}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameSummary;




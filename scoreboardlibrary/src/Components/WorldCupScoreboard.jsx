import React from "react";
import { useGameContext } from "../Context/GameContext";
import Game from "./Games";
import GameSummary from "./GameSummary";
 import './Scoreboard.css';

const WorldCupScoreboard = () => {
  const { state } = useGameContext();

  const allGamesFinished = state.games.every(
    (game) => game.status === "Finished"
  );

  return (
    <div>
      <h1>World Cup Live Scoreboard</h1>

      {allGamesFinished ? (
        <GameSummary />
      ) : (
        <div className="container">
          {state.games
            .filter(
              (game) => game.status === "Playing" || game.status === "Pending"
            )
            .map((game) => (
              <Game
                key={game.id}
                gameId={game.id}
                homeTeam={game.homeTeam}
                awayTeam={game.awayTeam}
              />
            ))}
        </div>
      )}
    </div>
  );
};


export default WorldCupScoreboard;

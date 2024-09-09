import React from "react";
import { useGameContext } from "../Context/GameContext";
import useGameFlow from "../Hooks/useGameFlow";
import useScoreUpdater from "../Hooks/useScoreUpdater";
import ScoreDisplay from "./ScoreDisplay";
import './Scoreboard.css';

const Game = ({ gameId, homeTeam, awayTeam }) => {
  const { state } = useGameContext();

  const { status } = useGameFlow(gameId);
  useScoreUpdater(status === "Playing", gameId);

  const currentGames = state.games.find((g) => g.id === gameId);

  return (
    <div>
      <ScoreDisplay
        homeTeam={homeTeam}
        awayTeam={awayTeam}
        homeScore={currentGames.homeScore}
        awayScore={currentGames.awayScore}
      />
      <p class="status">Status:{status}</p>
    </div>
  );
};

export default Game;

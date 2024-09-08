import React from "react";
import ScoreDisplay from "./ScoreDisplay";

const Game = ({ gameId, homeTeam, awayTeam}) => {

 const {state}=useGameContext();

  const { status } = useGameFlow(gameId);

  const currentGames=state.games.find((g)=>g.id===gameId)

  return (
    <div>
      <ScoreDisplay homeTeam={homeTeam} awayTeam={awayTeam} homeScore={currentGames.homeScore} awayScore={currentGames.awayScore} />
      <p>Status:{status}</p> 
    </div>
  );
};

export default Game;

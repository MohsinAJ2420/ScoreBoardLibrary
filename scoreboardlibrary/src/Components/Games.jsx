import React from "react";
import ScoreDisplay from "./ScoreDisplay";

const Game = ({  homeTeam, awayTeam,status}) => {
 

  

  return (
    <div>
      <ScoreDisplay homeTeam={homeTeam} awayTeam={awayTeam} homeScore={homeScore} awayScore={awayScore} />
      <p>Status:{status}</p> 
    </div>
  );
};

export default Game;

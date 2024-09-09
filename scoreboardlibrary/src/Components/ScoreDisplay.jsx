import React from "react";

const ScoreDisplay = ({ homeScore, awayScore, homeTeam, awayTeam }) => {
  return (
    <div>
      <h3>
        {homeTeam} vs {awayTeam}
      </h3>
      <p>
        Score: {homeScore} - {awayScore}
      </p>
    </div>
  );
};

export default ScoreDisplay;

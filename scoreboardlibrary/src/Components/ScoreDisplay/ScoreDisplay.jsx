import React from "react";
import PropTypes from 'prop-types';



const ScoreDisplay = ({ homeScore, awayScore, homeTeam, awayTeam }) => {
  return (
    <div >
      <h3>
        {homeTeam} vs {awayTeam}
      </h3>
      <p>
        Score: {homeScore} - {awayScore}
      </p>
    </div>
  );
};

ScoreDisplay.propTypes = {
  homeTeam: PropTypes.string.isRequired,
  awayTeam: PropTypes.string.isRequired,
  homeScore: PropTypes.number.isRequired,
  awayScore: PropTypes.number.isRequired,
};

export default ScoreDisplay;

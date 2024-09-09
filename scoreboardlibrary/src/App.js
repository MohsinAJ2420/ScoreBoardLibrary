import React from "react";
import { GameProvider } from "./Context/GameContext";
import WorldCupScoreboard from "./Components/WorldCupScoreboard/WorldCupScoreboard";
 import './styles/Scoreboard.css';  


const App = () => {
  return (
    <GameProvider>
      <WorldCupScoreboard />
    </GameProvider>
  );
};

export default App;

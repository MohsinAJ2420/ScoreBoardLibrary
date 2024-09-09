import React from "react";
import { GameProvider } from "./Context/GameContext";
import WorldCupScoreboard from "./Components/WorldCupScoreboard";

const App = () => {
  return (
    <GameProvider>
      <WorldCupScoreboard />
    </GameProvider>
  );
};

export default App;

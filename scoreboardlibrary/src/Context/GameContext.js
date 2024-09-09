import React, { createContext, useReducer, useContext } from "react";
import gameReducer from "./gameReducer";
import { createGame } from "./gameStatus";

const GameContext = createContext();

const initialState = {
  games: [
    createGame(0, "Mexico", "Canada"),
    createGame(1, "Spain", "Brazil"),
    createGame(2, "Germany", "France"),
    createGame(3, "Uruguay", "Italy"),
    createGame(4, "Argentina", "Australia"),
  ],
  startOrderCounter: 1,
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  return useContext(GameContext);
};

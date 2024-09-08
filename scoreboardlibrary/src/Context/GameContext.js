import React, { createContext, useReducer, useContext } from "react";

const actionTypes = {
  START_GAME: "START_GAME",
  FINISH_GAME: "FINISH_GAME",
  UPDATE_SCORE: "UPDATE_SCORE",
};

const GameContext = createContext();

const initialState = {
    games: [
      { id: 0, homeTeam: "Mexico", awayTeam: "Canada", homeScore: 0, awayScore: 0, status: "Pending", startOrder: null },
      { id: 1, homeTeam: "Spain", awayTeam: "Brazil", homeScore: 0, awayScore: 0, status: "Pending", startOrder: null },
      { id: 2, homeTeam: "Germany", awayTeam: "France", homeScore: 0, awayScore: 0, status: "Pending", startOrder: null },
      { id: 3, homeTeam: "Uruguay", awayTeam: "Italy", homeScore: 0, awayScore: 0, status: "Pending", startOrder: null },
      { id: 4, homeTeam: "Argentina", awayTeam: "Australia", homeScore: 0, awayScore: 0, status: "Pending", startOrder: null },
    ],
    startOrderCounter: 1,  
  }

const gameReducer = (state, action) => {
  switch (action.type) {
    case "START_GAME":
      const updatedGames = state.games.map((game) =>
        game.id === action.gameId
          ? { ...game, status: "Playing", startOrder: state.startOrderCounter }
          : game
      );

      console.log(`Game started: ${action.gameId}, Start Order: ${state.startOrderCounter}`);

      return {
        ...state,
        games: updatedGames,
        startOrderCounter: state.startOrderCounter + 1,
      };

    case actionTypes.FINISH_GAME:
      return {
        ...state,
        games: state.games.map((game) =>
          game.id === action.gameId ? { ...game, status: "Finished" } : game
        ),
      };

    case actionTypes.UPDATE_SCORE:
      return {
        ...state,
        games: state.games.map((game) =>
          game.id === action.gameId
            ? {
                ...game,
                [action.teamId === 1 ? "homeScore" : "awayScore"]:
                  game[action.teamId === 1 ? "homeScore" : "awayScore"] + 1,
              }
            : game
        ),
      };

    default:
      return state;
  }
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

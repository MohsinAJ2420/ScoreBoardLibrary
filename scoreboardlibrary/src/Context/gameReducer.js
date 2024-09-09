import { actionTypes } from "./actionTypes";
import { GAME_STATUSES } from "./gameStatus";

const gameReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.START_GAME:
      const updatedGames = state.games.map((game) =>
        game.id === action.gameId
          ? { ...game, status: GAME_STATUSES.PLAYING, startOrder: state.startOrderCounter }
          : game
      );

      return {
        ...state,
        games: updatedGames,
        startOrderCounter: state.startOrderCounter + 1,
      };

    case actionTypes.FINISH_GAME:
      return {
        ...state,
        games: state.games.map((game) =>
          game.id === action.gameId ? { ...game, status: GAME_STATUSES.FINISHED } : game
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

export default gameReducer;

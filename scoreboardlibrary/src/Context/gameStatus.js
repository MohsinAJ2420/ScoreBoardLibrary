export const GAME_STATUSES = {
    PENDING: "Pending",
    PLAYING: "Playing",
    FINISHED: "Finished",
  };
  
  export const createGame = (id, homeTeam, awayTeam) => ({
    id,
    homeTeam,
    awayTeam,
    homeScore: 0,
    awayScore: 0,
    status: GAME_STATUSES.PENDING,  
    startOrder: null,
  });
  
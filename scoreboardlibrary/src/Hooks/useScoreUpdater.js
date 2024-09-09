import { useEffect } from "react";
import { useGameContext } from "../Context/GameContext";
const useScoreUpdater = (isPlaying, gameId) => {
  const { dispatch } = useGameContext();

  useEffect(() => {
    if (!isPlaying) return;
    const intervalId = setInterval(() => {
      const teamId = Math.random() > 0.5 ? 1 : 2;
      dispatch({ type: "UPDATE_SCORE", gameId, teamId });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isPlaying, gameId, dispatch]);
};

export default useScoreUpdater;

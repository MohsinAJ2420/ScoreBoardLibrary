import { useCallback, useState } from "react";
import { useGameContext } from "../Context/GameContext";
import useRandomTimeout from "../Hooks/useRandomTimeout";

const useGameFlow = (gameId) => {
  const { dispatch } = useGameContext();
  const [status, setStatus] = useState("Pending");

  const startGame = useCallback(() => {
    setStatus("Playing");
    dispatch({ type: "START_GAME", gameId });
  }, [gameId, dispatch]);

  const finishGame = useCallback(() => {
    if (status === "Playing") {
      setStatus("Finished");
      dispatch({ type: "FINISH_GAME", gameId });
    }
  }, [status, gameId, dispatch]);
  useRandomTimeout(startGame, 2000, 5000);
  useRandomTimeout(finishGame, 10000, 15000);
  console.log(status);

  return { status };
};

export default useGameFlow;

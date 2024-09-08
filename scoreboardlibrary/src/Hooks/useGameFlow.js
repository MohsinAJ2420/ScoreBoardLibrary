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

 
  useRandomTimeout(startGame, 2000, 5000); 
 
  return { status };
};

export default useGameFlow;

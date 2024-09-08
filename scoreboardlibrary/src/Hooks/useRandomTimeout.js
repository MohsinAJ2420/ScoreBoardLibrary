import { useEffect } from "react";
const generateRandomDelay = (minInterval, maxInterval) => {
  const randomFactor = Math.pow(Math.random(), 0.5); 
  return Math.floor(minInterval + randomFactor * (maxInterval - minInterval));
};

const useRandomTimeout = (callback, minInterval, maxInterval) => {
  useEffect(() => {
    const randomDelay = generateRandomDelay(minInterval, maxInterval)    
    const timeoutId = setTimeout(callback, randomDelay);

    return () => clearTimeout(timeoutId); 
  }, [callback, minInterval, maxInterval]);
};

export default useRandomTimeout;


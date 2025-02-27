import { useEffect, useRef } from "react";

export function useAutoSave(callback, delay = 5000) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => clearInterval(handler);
  }, [delay]);
}

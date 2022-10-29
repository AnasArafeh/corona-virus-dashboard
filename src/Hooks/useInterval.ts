import { useRef, useEffect } from "react";

export const useInterval = (callback: () => any, intervalMs: number) => {
    const callbackRef = useRef(callback);
    callbackRef.current = callback;

    useEffect(() => {
        const intervalId = setInterval(() => callbackRef.current(), intervalMs);

        return () => {
            clearInterval(intervalId);
        };
    }, [intervalMs]);
}

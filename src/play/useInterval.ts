import {useCallback, useEffect, useRef} from "react";

/**
 * hook which clears a timeout on unmount
 */

/**
 * this version assumes that callback is created with useCallback/useMemo,
 * and therefore refreshes itself on dependency change
 */
export const _useInterval = (callback: () => void, timeout: number): void => {
    // when changing callback, need to clear the previous interval
    // use useRef to have a persistent reference
    // typescript got confused about the return value when not prefixing with window.
    const intervalId = useRef(-1);

    useEffect(() => {
        // clear the previous
        clearInterval(intervalId.current);

        // set interval to new value
        intervalId.current = setInterval(callback, timeout);

        // return clearInterval cleanup
        return () => clearInterval(intervalId.current);
    }, [callback, timeout]);
};

/**
 * version which handles useCallback internally
 */
export const useInterval = (callback: () => void, deps: any[], timeout: number): void => {
    const memo = useCallback(callback, deps);
    _useInterval(memo, timeout);
};

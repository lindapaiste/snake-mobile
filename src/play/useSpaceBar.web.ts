import {useEffect} from "react";

/**
 * Hook calls the passed in onPress function whenever the Space bar is pressed.
 * Use in the Playing screen to pause with togglePause.
 * Use on the Splash screen to start with onPressStart.
 */
export default function usePauseHandler(onPress: () => void): void {
    useEffect(
        () => {
            const listener = (e: KeyboardEvent) => {
                if (e.key === " ") {
                    onPress();
                }
            };

            window.addEventListener("keydown", listener);
            /**
             * Clean-up on unmount
             */
            return () => window.removeEventListener("keydown", listener);
        },
        [onPress]
    );
}
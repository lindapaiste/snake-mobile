import React, {useEffect} from "react";
import {getKeyDirection} from "../util";
import SwipeHandlerCore, {Props} from "./SwipeHandler.core";

/**
 * Web version will be loaded on mobile web, so it should
 * use the swipe handler AND listen for keyboard events.
 */
export default function SwipeHandler({switchDirection, children}: Props) {
    /**
     * add keyPress event listener to the window to respond to arrow keys
     */
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            const dir = getKeyDirection(e);
            // do nothing if other key pressed
            if (dir !== null) {
                // potentially ignore opposite direction??
                switchDirection(dir);
            }
        };
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [switchDirection]);

    return (
        <SwipeHandlerCore switchDirection={switchDirection}>
            {children}
        </SwipeHandlerCore>
    )
}

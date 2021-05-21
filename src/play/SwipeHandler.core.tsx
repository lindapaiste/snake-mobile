import {PanGestureHandler, State} from "react-native-gesture-handler";
import {Direction} from "../types";
import React, {ReactNode} from "react";
import {MIN_SWIPE_DISTANCE} from "../constants";
import {getSwipeDirection} from "../util";
import {View} from "react-native";

export interface Props {
    switchDirection(dir: Direction): void;
    children: ReactNode
}

/**
 * cannot just place children directly
 * requires either ref forwarding or wrapping in a native View
 *
 * want to call the switchDirection function only on gesture end, not during the gesture
 * onGestureEvent fires repeatedly, so need to use onHandlerStateChange instead
 *
 * note: could also use FlingGestureHandler which has a minimum velocity
 */
export default function SwipeHandler({switchDirection, children}: Props) {
    return (
        <PanGestureHandler
            minDist={MIN_SWIPE_DISTANCE}
            onHandlerStateChange={e => {
                if( e.nativeEvent.state === State.END ) {
                    switchDirection(getSwipeDirection(e.nativeEvent));
                }
            } }
        >
            <View style={{flex: 1}}>
                {children}
            </View>
        </PanGestureHandler>
    )
}

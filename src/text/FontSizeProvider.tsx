import React, {createContext, FC, useCallback, useContext, useState} from "react";
import {Dimensions, View} from "react-native";

/**
 * Don't need to use hooks to respond to window events
 * because the `onLayout` event fires on every layout change.
 */
const FontSizeContext = createContext<(vw: number) => number>(
    () => {
    throw new Error("No provider found");
});

export const FontSizeProvider: FC = ({children}) => {
    const [screen, setScreen] = useState<{ width: number, height: number }>(Dimensions.get("window"));

    const createSize = useCallback((vw: number) => {
        /**
         * Instead of splitting for web and mobile, can just set a hard maximum.
         */
        const basis = Math.min(
            6,
            .01 * Math.min(screen.width, screen.height),
        );
        return vw * basis;
    }, [screen])

    return (
        <View
            onLayout={e => setScreen(e.nativeEvent.layout)}
            style={{
                flex: 1,
                overflow: "hidden",
            }}
        >
            <FontSizeContext.Provider value={createSize}>
                {children}
            </FontSizeContext.Provider>
        </View>
    )
}

export const useVw = (vw: number): number => {
    const resize = useContext(FontSizeContext);
    return resize(vw);
}
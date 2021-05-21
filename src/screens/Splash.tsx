import React, {useCallback} from "react";
import Instructions from "../components/Instructions";
import Button from "../components/Button";
import Title from "../text/Title";
import ScreenWrapper from "./ScreenWrapper";
import useSpaceBar from "../play/useSpaceBar";

/**
 * title screen serves as AppLoading since it won't show "Press Start" button until isReady is true
 *
 * but this is only useful if loading something other than fonts, because can't display with unloaded font
 *
 * shows game title and instructions
 */

export interface Props {
    onPressStart(): void;

    isReady: boolean;
}

export default ({onPressStart, isReady}: Props) => {
    /**
     * Only call onPressStart when ready
     */
    const onPress = useCallback(
        () => isReady ? onPressStart() : undefined,
        [isReady, onPressStart]
    );
    /**
     * Listen for space bar start
     */
    useSpaceBar(onPress);

    return (
        <ScreenWrapper>
            <Title vw={16}>
                Snek Game
            </Title>
            <Instructions/>
            <Button onPress={onPress}>
                {isReady ? "Press Start" : "Loading..."}
            </Button>
        </ScreenWrapper>
    )
}

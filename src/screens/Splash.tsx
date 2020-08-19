import React from "react";
import Instructions from "../components/Instructions";
import Button from "../components/Button";
import Title from "../components/Title";
import ScreenWrapper from "./ScreenWrapper";

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
    return (
        <ScreenWrapper>
            <Title vw={16}>
                Snek Game
            </Title>
            <Instructions/>
            {
                isReady ?
                    <Button
                        onPress={onPressStart}
                    >
                        Press Start
                    </Button>
                    :
                    <Button onPress={() => undefined}>
                        Loading...
                    </Button>
            }
        </ScreenWrapper>
    )
}

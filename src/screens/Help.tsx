import {Props} from "./Paused";
import Title from "../text/Title";
import Button from "../components/Button";
import React from "react";
import Instructions from "../components/Instructions";
import ScreenWrapper from "./ScreenWrapper";

export default ({onPressResume}: Props) => {
    return (
        <ScreenWrapper>
            <Title vw={8}>
                Help
            </Title>
            <Instructions/>
            <Button
                onPress={onPressResume}
            >
                Resume
            </Button>
        </ScreenWrapper>
    );
}

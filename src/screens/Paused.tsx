import Title from "../components/Title";
import Button from "../components/Button";
import React from "react";
import ScreenWrapper from "./ScreenWrapper";

export interface Props {
    onPressResume(): void;
}

export default ({onPressResume}: Props) => (
    <ScreenWrapper>
        <Title vw={13}>
            Paused
        </Title>
        <Button
            onPress={onPressResume}
        >
            Resume
        </Button>
    </ScreenWrapper>
)

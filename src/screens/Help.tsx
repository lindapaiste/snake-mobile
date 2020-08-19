import {Props} from "./Paused";
import Title from "../components/Title";
import Button from "../components/Button";
import React from "react";
import Instructions from "../components/Instructions";
import ScreenWrapper from "./ScreenWrapper";

export default ({onPressResume}: Props) => (
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

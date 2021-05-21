import React from "react";
import Title from "../text/Title";
import {View} from "react-native";
import Text from "../text/Text";
import Button from "../components/Button";
import ScreenWrapper from "./ScreenWrapper";

export interface Scores { // interface is fulfilled by state, but doesn't have to be
    score: number;
    topScore: number;
}

export type Props = Scores & {
    onPressStart(): void;
}

export default ({score, topScore, onPressStart}: Props) => (
    <ScreenWrapper
        height="70%"
    >
        <Title vw={16}>
            Game Over
        </Title>
        <View><Text vw={5}>Score: {score}</Text></View>
        {score > topScore ? (
            <View><Text vw={5}>New Best!</Text></View>
        ) : (
            <View><Text>Your Best: {topScore}</Text></View>
        )}
        <Button onPress={onPressStart}>
            Play Again
        </Button>
    </ScreenWrapper>
)

import {FlexColumn} from "@lindapaiste/react-native-layout";
import Text from "../text/Text";
import React from "react";
import {EachProps} from "./ScoreSection";

/**
 * Mobile version uses larger fonts and places each word on top of the next.
 */
export const Score = ({word, score}: EachProps) => (
    <FlexColumn>
        <Text vw={3}>{word}</Text>
        <Text vw={3}>Score</Text>
        <Text vw={6}>{score}</Text>
    </FlexColumn>
)

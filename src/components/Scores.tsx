import {FlexColumn, FlexRow} from "@lindapaiste/react-native-layout";
import Text from "./Text";
import React from "react";
import {View} from "react-native";
import {Scores} from "../screens/GameOver";

/**
 * export props for consistency, although redundant
 */
export type Props = Scores;

/**
 * show the high score on the left and the current on the right
 */
export default ({score, topScore}: Props) => (
    <FlexRow
        style={{
            justifyContent: "space-between"
        }}
    >
        <View>
            <Score word="Best" score={topScore}/>
        </View>
        <View>
            <Score word="Current" score={score}/>
        </View>
    </FlexRow>
);

/**
 * helper for rendering each side to avoid code duplication
 */
interface EachProps {
    word: string;
    score: number;
}
export const Score = ({word, score}: EachProps) => (
    <FlexColumn>
        <Text vw={3}>{word}</Text>
        <Text vw={3}>Score</Text>
        <Text vw={6}>{score}</Text>
    </FlexColumn>
)

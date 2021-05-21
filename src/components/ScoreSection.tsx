import {FlexRow} from "@lindapaiste/react-native-layout";
import React from "react";
import {View, ViewProps} from "react-native";
import {Scores} from "../screens/GameOver";
import { Score } from "./Score";

/**
 * export props for consistency, although redundant
 */
export type Props = Scores & Pick<ViewProps, 'onLayout'>;

/**
 * show the high score on the left and the current on the right
 */
export default ({score, topScore, onLayout}: Props) => (
    <FlexRow
        style={{
            justifyContent: "space-between"
        }}
        onLayout={onLayout}
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
 * props for the cscore on each side
 */
export interface EachProps {
    word: string;
    score: number;
}
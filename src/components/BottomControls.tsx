import {FlexRow} from "@lindapaiste/layout";
import {TouchableHighlight} from "react-native";
import Text from "./Text";
import React from "react";

export interface Props {
    onPressPause(): void;

    onPressHelp(): void;

    onPressAudio(): void;
    isAudio: boolean;
}

export default ({onPressHelp, onPressPause}: Props) => (
    <FlexRow
        style={{
            width: "100%",
            justifyContent: "space-around"
        }}
    >
        <TouchableHighlight
            onPress={onPressPause}
        >
            <Text
                vw={10}
                style={{
                    // use a rotated equal sign for pause
                    transform: [{rotate: "90deg"}, {scaleY: 1.5}, {scaleX: .8}]
                }}
            >
                =
            </Text>
        </TouchableHighlight>

        <TouchableHighlight
            onPress={onPressHelp}
        >
            <Text
                vw={8}
            >
                ?
            </Text>
        </TouchableHighlight>

    </FlexRow>
)

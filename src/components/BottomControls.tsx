import {FlexRow} from "@lindapaiste/react-native-layout";
import {TouchableHighlight, View, ViewProps} from "react-native";
import Text from "../text/Text";
import React from "react";
import AudioIcon from "./AudioIcon";

/**
 * use question mark for help and rotated equal sign for pause from the PressStart2P font
 * but needed to create my own custom SVG for audio
 *
 * audio is the only one with an on/off state since pause and help take over the whole screen
 */

export interface Props {
    onPressPause(): void;

    onPressHelp(): void;

    onPressAudio(): void;

    isAudioOn: boolean;
}

export default ({onPressHelp, onPressPause, onPressAudio, isAudioOn, onLayout}: Props & Pick<ViewProps, 'onLayout'>) => (
    <FlexRow
        style={{
            width: "100%",
            maxWidth: 600,
            justifyContent: "space-around"
        }}
        onLayout={onLayout}
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
            >=</Text>
        </TouchableHighlight>

        <TouchableHighlight
            onPress={onPressAudio}
        >
            <View>
            <AudioIcon
                vw={8}
                isAudioOn={isAudioOn}
            />
            </View>
        </TouchableHighlight>

        <TouchableHighlight
            onPress={onPressHelp}
        >
            <Text vw={8}>?</Text>
        </TouchableHighlight>

    </FlexRow>
)

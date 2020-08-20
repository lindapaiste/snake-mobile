import Svg, {Path} from "react-native-svg";
import React from "react";
import {COLORS} from "../constants";
import {useVw} from "@lindapaiste/react-native-layout";

/**
 * switches between on and off icons
 * size based on vw for consistency with text icons
 */
export interface Props {
    isAudioOn: boolean;
    vw: number;
}

export default ({isAudioOn, vw}: Props) => {
    const fontSize = useVw(vw);

    return (
        <Svg
            // raw svg is 8 units wide by 7 units tall
            viewBox="0 0 8 7"
            width={fontSize * 8 / 7}
            height={fontSize}
        >
            <Path
                // always draw the speaker
                d={"M 0 2 h2 v-1 h1 v-1 h1 v7 h-1 v-1 h-1 v-1 h-2 v-3" + (
                    // draw lines if on or an x if off
                    isAudioOn
                        ? "M 5 3 h1 v-1 h1 v-1 h1 v-1 h-1 v1 h-1 v1 h-1 v1 M 7 3 h1 v1 h-1 v-1 M 5 4 h1 v1 h1 v1 h1 v1 h-1 v-1 h-1 v-1 h-1 v-1"
                        : "M 5 2 h1 v1 h1 v-1 h1 v1 h-1 v1 h1 v1 h-1 v-1 h-1 v1 h-1 v-1 h1 v-1 h-1 v-1"
                )}
                fill={COLORS["text"]}
            />
        </Svg>
    )
}

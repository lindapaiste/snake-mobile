import Text from "./Text";
import React from "react";

export interface Props {
    vw: number;
    children: string;
}

export default ({vw, children}: Props) => (
    <Text
        vw={vw}
        lineHeightRatio={1.2}
        uppercase={true}
        style={{
            textAlign: "center",
            // wordSpacing: fontSize * -.4, react native has letter spacing but no word spacing
        }}
    >
        {children}
    </Text>
);

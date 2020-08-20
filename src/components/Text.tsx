import {Text, TextProps, View} from "react-native";
import React, {ReactText} from "react";
import {useVw} from "@lindapaiste/react-native-layout";

/**
 * apply lime green color and PressStart font to a Text component
 */

export type Props = {
    vw?: number;
    lineHeightRatio?: number;
    children: ReactText | ReactText[]; // array support is needed for inline {variable} insertion
    uppercase?: boolean;
} & TextProps;

export const GreenText = ({vw = 3, lineHeightRatio = 1.5, uppercase = false, ...props}: Props) => {

    const fontSize = useVw(vw);

    return (
        <Text
            {...props}
            style={[{
                fontSize,
                lineHeight: fontSize * lineHeightRatio,
                fontFamily: "PressStart2P_400Regular",
                color: "lime",
                textTransform: uppercase ? "uppercase" : "none",
            },
                props.style
            ]}
        />
    );
}

export default GreenText;

/** apply special inline stying to key names */
export const Key = ({children}: { children: string }) => (
    <View // can't apply border directly to text
        style={{
            borderBottomWidth: 2,
            borderStyle: "solid",
            borderColor: "lime"
        }}
    >
        <GreenText
            uppercase={true}
        >
            {children}
        </GreenText>
    </View>
);

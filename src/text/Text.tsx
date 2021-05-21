import {Text, TextProps} from "react-native";
import React, {ReactText} from "react";
import {useVw} from "./FontSizeProvider";

/**
 * apply lime green color and PressStart font to a Text component
 */

export type Props = {
    vw?: number;
    lineHeightRatio?: number;
    children: ReactText | ReactText[]; // array support is needed for inline {variable} insertion
    uppercase?: boolean;
} & TextProps;

/**
 * forwards ref so that it can be used as a Touchable child
 */
export const GreenText = React.forwardRef<Text, Props>(({vw = 3, lineHeightRatio = 1.5, uppercase = false, ...props}, ref) => {

    const fontSize = useVw(vw);

    return (
        <Text
            ref={ref}
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
});

export default GreenText;


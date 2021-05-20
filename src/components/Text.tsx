import {Text, TextProps, View} from "react-native";
import React, {MutableRefObject, ReactText} from "react";
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

type Ref<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;

/**
 * forwards ref so that it can be used as a Touchable child
 */
export const GreenText = React.forwardRef(({vw = 3, lineHeightRatio = 1.5, uppercase = false, ...props}: Props, ref: Ref<Text>) => {

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

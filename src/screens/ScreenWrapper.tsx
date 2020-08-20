import {FlexColumn} from "@lindapaiste/react-native-layout";
import React, {PropsWithChildren} from "react";
import {ViewProps} from "react-native";

export type Props = PropsWithChildren<ViewProps> & {
    height?: string | number;
}

export default ({height = "100%", ...props}: Props) => (
    <FlexColumn
        {...props}
        style={[{
            justifyContent: "space-evenly",
            height,
        },
            props.style
        ]}
    />
)

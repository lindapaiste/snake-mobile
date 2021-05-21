import {TouchableHighlight} from "react-native";
import React from "react";
import Text from "../text/Text";
import {useVmin} from "@lindapaiste/react-native-layout";

export type Props = {
    onPress(): void;
    children: string;
}

export default ({onPress, children}: Props) => {
    const padding = useVmin(4);
    return (
        <TouchableHighlight
            style={{
                borderStyle: "solid",
                borderWidth: 2,
                borderColor: "lime",
                padding,
                margin: padding,
            }}
            onPress={onPress}
        >
            <Text
               uppercase={true}
               vw={5}
            >
                {children}
            </Text>
        </TouchableHighlight>
    )
}

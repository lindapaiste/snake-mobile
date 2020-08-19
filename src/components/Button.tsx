import {TouchableHighlight} from "react-native";
import React from "react";
import Text from "./Text";
import {useVw} from "@lindapaiste/layout";

//background: #000;
//    padding: 1vh;
//    margin: 1vh;

export type Props = {
    onPress(): void;
    children: string;
}

export default ({onPress, children}: Props) => {
    const padding = useVw(4);
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

import {View} from "react-native";
import React from "react";
import GreenText from "./Text";

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
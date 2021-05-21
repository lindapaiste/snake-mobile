import {View} from "react-native";
import React, {ReactNode} from "react";
import {BasicSquare} from "./Square";
import Text from "../text/Text";
import {FlexRow, useVh, useVmin} from "@lindapaiste/react-native-layout";
import {Colored} from "../types";
import {Key} from "../text/Key";

/**
 * Pass the platform-specific instructions as children
 */
export const Instructions = ({children}: { children: ReactNode }) => {
    return (
        <View>
            {children}
            <Item>
                <Text>collect </Text><Key>apples</Key>
                <ExampleSquare type={"apple"}/>
            </Item>
            <Item>
                <Text>avoid </Text><Key>obstacles</Key>
                <ExampleSquare type={"obstacle"}/>
            </Item>
            <Item>
                <Text>avoid </Text><Key>walls</Key>
                <ExampleSquare type={"wall"}/>
            </Item>
        </View>
    );
}

/**
 * renders a colored square and also adds a left margin to separate it from the text
 */
const ExampleSquare = ({type}: { type: Colored }) => {
    const squareSize = useVmin(4.5);

    return (
        <View
            style={{
                marginLeft: .5 * squareSize
            }}
        >
            <BasicSquare
                type={type}
                size={squareSize}
            />
        </View>
    )
}

/**
 * what about bullet?
 */
export const Item = ({children}: { children: ReactNode }) => (
    <FlexRow
        style={{
            marginVertical: useVh(2)
        }}
    >
        {children}
    </FlexRow>
)

import {View} from "react-native";
import React, {ReactNode} from "react";
import {BasicSquare} from "./Square";
import {SQUARE_SIZE} from "../constants";
import Text, {Key} from "./Text";
import {FlexRow, useVh} from "@lindapaiste/react-native-layout";
import {Colored} from "../types";

export default () => (
    <View>
        <Item>
            <Key>swipe</Key><Text> to change direction</Text>
        </Item>
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

/**
 * could multiply size
 */
const ExampleSquare = ({type}: { type: Colored }) => (
    <View
        style={{
            marginLeft: .5 * SQUARE_SIZE
        }}
    >
        <BasicSquare
            type={type}
            size={SQUARE_SIZE}
        />
    </View>
)

/**
 * what about bullet?
 */
const Item = ({children}: { children: ReactNode }) => (
    <FlexRow
        style={{
            marginVertical: useVh(2)
        }}
    >
        {children}
    </FlexRow>
)

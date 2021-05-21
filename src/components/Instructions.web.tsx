import {Instructions, Item} from "./Instructions.core";
import Text from "../text/Text";
import React from "react";
import {Key} from "../text/Key";

export default () => (
    <Instructions>
        <Item>
            <Text>use </Text><Key>Arrow Keys</Key><Text> to change direction</Text>
        </Item>
        <Item>
            <Text>press </Text><Key>Space Bar</Key><Text> to pause</Text>
        </Item>
    </Instructions>
);
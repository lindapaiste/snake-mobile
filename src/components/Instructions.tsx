import Text from "../text/Text";
import React from "react";
import {Instructions, Item} from "./Instructions.core";
import {Key} from "../text/Key";

export default () => (
    <Instructions>
        <Item>
            <Key>swipe</Key><Text> to change direction</Text>
        </Item>
    </Instructions>
);
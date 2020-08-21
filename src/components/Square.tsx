import {Colored, Position, SquareType} from "../types";
import {PositionedView, SquareView} from "@lindapaiste/react-native-layout";
import React from "react";
import {COLORS} from "../constants";

/**
 * basic colored square to be used in instruction list and on board
 */
export interface PropsB {
    type: Colored;
    size: number;
}

export const BasicSquare = ({size, type}: PropsB) => (
    <SquareView
        size={size}
        style={{
            backgroundColor: COLORS[type]
        }}
    />
);

/**
 * square for the board wraps a basic colored square in a positioned view
 */
interface Props {
    pos: Position;
    type: SquareType;
    size: number;
}

export const Square = ({type, pos, size}: Props) => (
    <PositionedView
        x={pos.x * size}
        y={pos.y * size}
    >
        <BasicSquare
            type={type}
            size={size}
        />
    </PositionedView>
);

export default Square;

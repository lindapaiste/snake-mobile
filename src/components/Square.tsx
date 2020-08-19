import {Colored, Position, SquareType} from "../types";
import {PositionedView, SquareView} from "@lindapaiste/layout";
import React from "react";
import {COLORS, SQUARE_SIZE} from "../constants";

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
}

export const Square = ({type, pos}: Props) => (
    <PositionedView
        x={pos.x * SQUARE_SIZE}
        y={pos.y * SQUARE_SIZE}
    >
        <BasicSquare
            type={type}
            size={SQUARE_SIZE}
        />
    </PositionedView>
);

export default Square;

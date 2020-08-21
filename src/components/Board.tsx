import {COLORS, HEIGHT, WIDTH} from "../constants";
import React from "react";
import {FixedSizeView, RelativeContainer} from "@lindapaiste/react-native-layout";
import Square from "./Square";
import {Position, SquareType} from "../types";

/**
 * is in the same shape as State, but want to define here rather than using Pick<State> such that changes to State
 * structure won't impact rendering components
 */
export interface StateProps {
    snakeSquares: Position[];
    appleSquares: Position[];
    obstacleSquares: Position[];
}

export interface LayoutProps {
    borderWidth: number;
    squareSize: number;
}

/**
 * Board does not need to render empty squares. Instead it use absolute positioning to place elements on top of the
 * background.
 */
export default ({appleSquares, obstacleSquares, snakeSquares, borderWidth, squareSize}: StateProps & LayoutProps) => {

    return (
        <RelativeContainer
            // border works better if defined outside of the sized board
            style={{
                borderColor: COLORS["wall"],
                borderWidth,
                borderStyle: "solid",
            }}
        >
            <FixedSizeView
                width={WIDTH * squareSize}
                height={HEIGHT * squareSize}
            >
                <MultipleSquares
                    positions={appleSquares}
                    type={"apple"}
                    size={squareSize}
                />
                <MultipleSquares
                    positions={obstacleSquares}
                    type={"obstacle"}
                    size={squareSize}
                />
                <MultipleSquares
                    positions={snakeSquares}
                    type={"snake"}
                    size={squareSize}
                />
            </FixedSizeView>
        </RelativeContainer>
    )
}

/**
 * helper to render an array of squares for apples, obstacles, and snake
 */
const MultipleSquares = ({positions, type, size}: { positions: Position[], type: SquareType, size: number }) => (
    <>
        {positions.map(pos => (
            <Square
                key={`${type}_${pos.x}_${pos.y}`}
                pos={pos}
                type={type}
                size={size}
            />
        ))}
    </>
);

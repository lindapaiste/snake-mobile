import {COLORS, HEIGHT, SQUARE_SIZE, WIDTH} from "../constants";
import React from "react";
import {FixedSizeView, RelativeContainer, useVw} from "@lindapaiste/react-native-layout";
import Square from "./Square";
import {Position, SquareType} from "../types";

/**
 * is in the same shape as State, but want to define here rather than using Pick<State> such that changes to State
 * structure won't impact rendering components
 */
export interface Props {
    snakeSquares: Position[];
    appleSquares: Position[];
    obstacleSquares: Position[];
}

/**
 * can loop through and render every square
 * but can also just render a background and
 * use absolute positioning to place elements on top of it
 */
export default ({appleSquares, obstacleSquares, snakeSquares}: Props) => {
    return (

        <RelativeContainer
            style={{
                borderColor: COLORS["wall"],
                borderWidth: useVw(1),
                borderStyle: "solid",
            }}
        >
            <FixedSizeView
                width={WIDTH * SQUARE_SIZE}
                height={HEIGHT * SQUARE_SIZE}
            >

                <MultipleSquares
                    positions={appleSquares}
                    type={"apple"}
                />
                <MultipleSquares
                    positions={obstacleSquares}
                    type={"obstacle"}
                />
                <MultipleSquares
                    positions={snakeSquares}
                    type={"snake"}
                />
            </FixedSizeView>

        </RelativeContainer>
    )
}

/**
 * helper to render an array of squares for apples, obstacles, and snake
 */
const MultipleSquares = ({positions, type}: { positions: Position[], type: SquareType }) => (
    <>
        {positions.map(pos => (
            <Square
                key={`${type}_${pos.x}_${pos.y}`}
                pos={pos}
                type={type}
            />
        ))}
    </>
);

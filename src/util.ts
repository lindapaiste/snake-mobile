import {Direction, Position} from "./types";
import {HEIGHT, WIDTH} from "./constants";

/**
 * helper functions which do not depend on state,
 * aside from passed in props
 */

export const getKeyDirection = (e: KeyboardEvent): Direction | null => {
    switch (e.key) {
        case "ArrowLeft":
            return Direction.LEFT;
        case "ArrowUp":
            return Direction.UP;
        case "ArrowRight":
            return Direction.RIGHT;
        case "ArrowDown":
            return Direction.DOWN;
        default:
            return null;
    }
};

export const getSwipeDirection = ({translationX, translationY}: {translationX: number, translationY: number}): Direction => {
    // note: does not check for threshold here
    const isX = Math.abs(translationX) > Math.abs(translationY );
    if ( isX ) {
        return translationX > 0 ? Direction.RIGHT : Direction.LEFT;
    } else {
        return translationY > 0 ? Direction.DOWN: Direction.UP;
    }
}

export const nextSquare = (dir: Direction, head: Position): Position => {
    const {x, y} = head;
    switch (dir) {
        case Direction.DOWN:
            return {x, y: y + 1};
        case Direction.UP:
            return {x, y: y - 1};
        case Direction.LEFT:
            return {x: x - 1, y};
        case Direction.RIGHT:
            return {x: x + 1, y};
    }
};

export const allSquares = (): Position[] => {
    const squares: Position[] = [];
    for (let x = 0; x < WIDTH; x++) {
        for (let y = 0; y < HEIGHT; y++) {
            squares.push({x, y});
        }
    }
    return squares;
};

export const isOutOfBounds = (pos: Position): boolean => {
    return pos.x >= WIDTH || pos.x < 0 || pos.y >= HEIGHT || pos.y < 0;
};

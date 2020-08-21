export interface Position {
  x: number;
  y: number;
}

export enum Direction {
  UP,
  LEFT,
  DOWN,
  RIGHT
}

export interface State {
  // direction that the snake is pointed
  direction: Direction;
  snakeSquares: Position[];
  appleSquares: Position[];
  obstacleSquares: Position[];
  // speed is the number of ms between each move
  // should get faster as the game elapses
  speed: number;
  // number of apples eaten
  score: number;
  topScore: number;
  isDead: boolean;
  isFull: boolean;
  // handle pause
  isPlaying: boolean;
  needsGrow: number;
}

/**
 * matches with CSS class names
 */
export type SquareType = "snake" | "apple" | "obstacle";

/**
 * square types have colors as well as walls and text
 */
export type Colored = SquareType | "wall" | "text";

export type SoundEvent = "eatApple" | "die" | "turn";

export type PlaySound = (event: SoundEvent) => void;

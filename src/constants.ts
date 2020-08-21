import {Colored, SoundEvent} from "./types";
import {AVPlaybackSource} from "expo-av/build/AV";

/**
 * number of columns on the board
 */
export const WIDTH = 20;
/**
 * number of rows on the board
 */
export const HEIGHT = 30;
/**
 * squares on the snake at the start of the game
 */
export const INITIAL_LENGTH = 3;
/**
 * snake grows by this many squares for every apple that it eats
 */
export const GROW_PER_APPLE = 3;
/**
 * number of milliseconds between each move
 */
export const INITIAL_SPEED = 300;
/**
 * JS cannot execute multiple setTimeout/setInterval when they are called at the same time
 * so rather than defining a number of milliseconds here,
 * define the number of moves n such that the snake speeds up after n moves
 */
export const SPEED_UP_EVERY = 10;
/**
 * time between moves gets multiplied by this number
 */
export const SPEED_UP_RATIO = 0.95;
/**
 * a new obstacle appears after this many moves
 */
export const OBSTACLE_EVERY = 5;
/**
 * if equal to obstacle_every then there will be one obstacle on the board at a time
 * if greater, then the number of obstacles will increase over time
 * if less, there will sometimes be no obstacle
 */
export const OBSTACLE_EXPIRE = 6;
/**
 * stops propagation of obstacles beyond a certain amount
 */
export const MAX_OBSTACLES = 5;

/**
 * hard-code colors for each square type as well as walls and text
 */
export const COLORS: Record<Colored, string> = {
    snake: "white",
    apple: "red",
    obstacle: "yellow",
    wall: "white",
    text: "lime",
}

/**
 * ignore taps by only looking for touches which exceed this distance
 */
export const MIN_SWIPE_DISTANCE = 10;

/**
 * load in sound files
 */
export const SOUNDS: Record<SoundEvent, AVPlaybackSource> = {
    die: require('../assets/death.wav'),
    eatApple: require('../assets/appleEat.wav'),
    turn: require('../assets/turn.wav'),
};

/**
 * export array with the names of all sounds for looping
 */
export const SOUND_EVENTS = Object.keys(SOUNDS) as SoundEvent[];

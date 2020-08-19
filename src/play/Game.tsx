import React, {useEffect, useReducer, useState} from "react";
import {OBSTACLE_EVERY, OBSTACLE_EXPIRE, SPEED_UP_EVERY,} from "../constants";
import Board from "../screens/Playing";
import {reducer} from "../state/reducer";
import {useActions} from "../state/actions";
import {getInitialState} from "../state/initialState";
import {isDead as getIsDead, isPaused as getIsPaused} from "../state/selectors";
import Paused from "../screens/Paused";
import GameOver from "../screens/GameOver";
import SwipeHandler from "./SwipeHandler";
import Help from "../screens/Help";
import {PlaySound, SoundEvent} from "../types";
import {useInterval} from "./useInterval";
import {useIsAudio, useTopScore} from "./useStorage";

/**
 * function handles all of the effects and passes off the state to the render component
 * this is the only component which should care at all about the shape of state
 * all other components define what props they need and expect to have them passed in directly
 * rather than extracting from state
 */

export interface Props {
    playSound: PlaySound;
}

export default ({playSound}: Props) => {
    const [state, dispatch] = useReducer(reducer, getInitialState(true));

    const actions = useActions(dispatch);

    const [ticks, setTicks] = useState(0);

    const [isAudio, setIsAudio] = useIsAudio();

    const [topScore, setTopScore, hasScoreError] = useTopScore();

    /**
     * don't play sound if audio is turned off
     */
    const maybePlaySound = (event: SoundEvent) => {
        if (isAudio) {
            playSound(event);
        }
    }

    /**
     * move effect -- move every x seconds until death
     * having multiple intervals does not seem to work, so need to tie everything to one
     * save the number of moves as "ticks" and use this to trigger actions on every n ticks
     */
    useInterval(
        () => {
            if (state.isPlaying) {
                actions.moveSnake();
                setTicks(t => t + 1);
                if (ticks % SPEED_UP_EVERY === 0) {
                    actions.speedUp();
                }
                if (ticks % OBSTACLE_EVERY === 0) {
                    actions.placeObstacle();
                }
                if (ticks % OBSTACLE_EXPIRE === 0) {
                    actions.expireObstacle();
                }
            }
        },
        [actions, state.isPlaying],
        state.speed
    );

    /**
     * play sound upon death
     */
    const isDead = getIsDead(state);
    useEffect(() => {
        if (isDead) {
            maybePlaySound('die');
        }
    }, [isDead]);

    /**
     * can use changes in score as a trigger for the apple eat sound
     */
    useEffect(
        () => {
            if (state.score) {
                maybePlaySound('eatApple');
            }
        }, [state.score]
    )

    /**
     * right now a session high score is still being updating in state each time that the game restarts
     * use this to update the stored device high score
     *
     * need to be sure that we do not overwrite the stored value of topScore with a lower value if there was an error
     * while retrieving it, but also don't want to not save a genuine high score
     */
    useEffect(
        () => {
            if (state.topScore > topScore && !hasScoreError) {
                setTopScore(state.topScore);
            }
        },
        [state.topScore]
    )

    /**
     * switching between screens
     */
    const [isHelp, setIsHelp] = useState(false);

    const isPaused = getIsPaused(state);

    if (isPaused) {
        const Component = isHelp ? Help : Paused;
        return (
            <Component
                onPressResume={() => {
                    actions.togglePause();
                    setIsHelp(false);
                }}
            />
        )
    } else if (isDead) {
        return (
            <GameOver
                score={state.score}
                topScore={topScore || state.topScore}
                onPressStart={() => actions.start()}
            />
        )
    } else {
        return (
            <SwipeHandler
                switchDirection={(dir) => {
                    actions.arrowPress(dir);
                    maybePlaySound('turn');
                }}
            >
                <Board
                    {...state}
                    topScore={topScore || state.topScore}
                    onPressPause={() => actions.togglePause()}
                    onPressHelp={() => {
                        setIsHelp(true);
                        actions.togglePause();
                    }}
                    onPressAudio={() => setIsAudio(!isAudio)}
                    isAudioOn={isAudio}
                />
            </SwipeHandler>
        );
    }
}

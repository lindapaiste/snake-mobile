import React, {useMemo, useState} from "react";
import {FlexColumn, useVw} from "@lindapaiste/react-native-layout";
import Board, {StateProps as BoardProps} from "../components/Board";
import Scores, {Props as ScoresProps} from "../components/Scores";
import ScreenWrapper from "./ScreenWrapper";
import BottomControls, {Props as ControlsProps} from "../components/BottomControls";
import {HEIGHT, WIDTH} from "../constants";
import {useDimensions} from "@react-native-community/hooks";
export type Props = BoardProps & ScoresProps & ControlsProps;

/**
 * combines elements scores, board, pause/help buttons
 *
 * Also serves as the primary location for size calculation. Previously square size was a global constant, but for the
 * best cross-device sizing it makes more sense to calculate it and pass it down to the Square component. It will
 * primarily based on width since the app is designed for portrait mode and the extra spacing is expected to be
 * vertical. However an additional height check needs to be made for tablets and other devices with wider, less
 * rectangular screens such that the height does not overflow the allotted area.
 *
 * Do the calculation here rather than in the Board because want to Board component to be its actual height, not the
 * maximum height. So rather than sizing based on a maxed View around board, subtract scores and controls height from
 * the screen.  This allows the final layout to have better spacing.  The calculation itself is fairly simple, but it
 * involves a lot of inputs.
 */
export default (props: Props) => {

    const availableWidth = useDimensions().window.width;
    const [scoresHeight, setScoresHeight] = useState(0);
    const [controlsHeight, setControlsHeight] = useState(0);

    const borderWidth = useVw(1);

    const squareSize = useMemo(() => calcSquareSize({
            borderWidth,
            availableWidth,
            availableHeight: screen.height - (scoresHeight + controlsHeight),
        }),
        [screen.height, screen.width, scoresHeight, controlsHeight, borderWidth]
    );

    return (
        <ScreenWrapper>
            <FlexColumn
                // group Scores and Board together so that there is no gap between them
                style={{
                    flex: 1,
                    alignItems: "stretch"
                }}
            >
                <Scores
                    {...props}
                    onLayout={e => setScoresHeight(e.nativeEvent.layout.height)}
                />
                <Board
                    {...props}
                    borderWidth={borderWidth}
                    squareSize={squareSize}
                />
            </FlexColumn>
            <BottomControls
                {...props}
                onLayout={e => setControlsHeight(e.nativeEvent.layout.height)}
            />
        </ScreenWrapper>
    );
};

interface CalcProps {
    availableHeight: number;
    availableWidth: number;
    borderWidth: number;
    horizontalPadPercent?: number;
    verticalPadPercent?: number;
}

const calcSquareSize = ({availableHeight, availableWidth, borderWidth, horizontalPadPercent = 4, verticalPadPercent = 4}: CalcProps): number => {
    const maxByHeight = ((availableHeight * (100 - 2 * verticalPadPercent) / 100) - 2 * borderWidth) / HEIGHT;
    const maxByWidth = ((availableWidth * (100 - 2 * horizontalPadPercent) / 100) - 2 * borderWidth) / WIDTH;
    return Math.floor(Math.min(maxByHeight, maxByWidth));
}

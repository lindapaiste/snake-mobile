import React from "react";
import {FlexColumn} from "@lindapaiste/react-native-layout";
import Board, {Props as BoardProps} from "../components/Board";
import Scores, {Props as ScoresProps} from "../components/Scores";
import ScreenWrapper from "./ScreenWrapper";
import BottomControls, {Props as ControlsProps} from "../components/BottomControls";

export type Props = BoardProps & ScoresProps & ControlsProps;

/**
 * basically just combines elements: scores, board, pause/help buttons
 */
export default (props: Props) => {
    return (
        <ScreenWrapper>
            <FlexColumn style={{flex: 1, alignItems: "stretch"}}>

                <Scores {...props}/>

                <Board {...props}/>

            </FlexColumn>

            <BottomControls {...props} />
        </ScreenWrapper>
    );
};

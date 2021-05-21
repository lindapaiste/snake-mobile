import Text from "../text/Text";
import React from "react";
import { EachProps } from "./ScoreSection";

/**
 * Web version places all score text on one line.
 */
export const Score = ({word, score}: EachProps) => (
    <Text>{word} Score: {score}</Text>
)

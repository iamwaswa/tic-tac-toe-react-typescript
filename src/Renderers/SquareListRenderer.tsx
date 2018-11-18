import Game from "src/Components/Game";
import Square from "src/Components/Square";
import * as React from "react";
import { CSSProperties } from "react";
import styles from "src/styles";

const isWinningPosition = (
  (winningPositions: number[], index: number): boolean => {
    return winningPositions
      .filter((winningPosition: number) => {
        if (winningPosition === index) {
          return true;
        }
        return false;
      })
      .length === 1;
  }
);

const renderSquares = (game: Game): JSX.Element[] => {
  return Array(game.state.board.length)
    .fill(undefined)
    .map((element: undefined, index: number) => {
      const value = game.state.board[index];
      const winningPositions = game.state.winningPositions;

      const handleSquareOnClick = (): void => {
        game.handleSquareOnClick(index);
      };

      const setStyleForWinSquare = (): CSSProperties => {
        if (isWinningPosition(winningPositions, index)) {
          return { ...styles.square, ...styles.winSquare };
        }
        return { ...styles.square, ...styles.normalSquare };
      };

      return (
        <Square
          key = { index }
          value = { value }
          style = { setStyleForWinSquare }
          onClick = { handleSquareOnClick }
        />
      );
    }
  );
};

export default renderSquares;
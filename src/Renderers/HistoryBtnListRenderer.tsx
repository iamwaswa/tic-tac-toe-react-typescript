import HistoryButton from 'src/Components/HistoryButton';
import * as React from 'react';
import Game from 'src/Components/Game';
import Coordinate from 'src/Types/Coordinate';

const determineRow = (index: number): number => {
  if (index >= 0 && index <= 2) {
    return 1;
  } else if (index >= 3 && index <= 5) {
    return 2;
  } else if (index >= 6 && index <= 8) {
    return 3;
  }
  return -1;
};

const determineColumn = (index: number): number => {
  if (index === 0 || index === 3 || index === 6) {
    return 1;
  } else if (index === 1 || index === 4 || index === 7) {
    return 2;
  } else if (index === 2 || index === 5 || index === 8) {
    return 3;
  }
  return -1;
};

const createCoordinate = (index: number): Coordinate => {
  const row = determineRow(index);
  const column = determineColumn(index);
  return new Coordinate(row, column);
};

const getNewMoveCoordinate = (
  (nextMoveIndex: number): Coordinate => {
    return createCoordinate(nextMoveIndex);
  }
);

const renderHistoryBtnList = (game: Game): JSX.Element[] => {
  const { historyBoards, nextMoves } = game.state.history;

  return historyBoards.map(
    (historyBoard: string[], index: number) => {
      const handleHistoryButtonOnClick = (
        (): boolean => {
          return game.handleHistoryButtonOnClick(index);
        }
      );

      const newMoveCoordinate =
        getNewMoveCoordinate(nextMoves[index]);

      return (
        <HistoryButton
          key = { index }
          position = { index }
          coordinate = { newMoveCoordinate }
          onClick = { handleHistoryButtonOnClick }
        />
      );
    }
  );
};

export default renderHistoryBtnList;
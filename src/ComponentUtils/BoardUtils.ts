const findIndexOfMatchingBoard = (
  (historyBoards: string[][], board: string[]): number => {
    for (let index = 0; index < historyBoards.length; index++) {
      const areSame = areBoardsSame(historyBoards[index], board);
      if (areSame) {
        return index;
      }
    }

    return -1;
  }
);

const areBoardsSame = (
  (firstBoard: string[], secondBoard: string[]): boolean => {
    for (let index = 0; index < firstBoard.length; index++) {
      if (firstBoard[index] !== secondBoard[index]) {
        return false;
      }
    }

    return true;
  }
);

const wasMatchingBoardFound = (
  (historyBoardIndex: number): boolean => {
    return historyBoardIndex === -1 ? false : true;
  }
);

const nextHistoryBoardExists = (
  (historyBoardIndex: number, numHistoryBoards: number): boolean => {
    const nextHistoryBoardIndex = historyBoardIndex + 1;

    return nextHistoryBoardIndex < numHistoryBoards;
  }
);

const BoardUtils = {
  findIndexOfMatchingBoard,
  areBoardsSame,
  wasMatchingBoardFound,
  nextHistoryBoardExists,
};

export default BoardUtils;
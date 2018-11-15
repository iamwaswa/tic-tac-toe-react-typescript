import { IGameState } from "src/Components/Game";
import Turn from "src/Enums/Turn";
import GameStatus from "src/Enums/GameStatus";

const possibleWinningStates = [
  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonals
  [0, 4, 8],
  [2, 4, 6],
];

const startBoard = Array(9).fill(``);
const startTurn = Turn.X;
const startGameStatus = GameStatus.CURRENT_PLAYER_X;

const historyBoards: string[][] = [];
const turns: Turn[] = [];
const gameStatusValues: GameStatus[] = [];

const startHistory = {
  historyBoards,
  turns,
  gameStatusValues,
};

export const setupGame = (): IGameState => {

  return {
    history: startHistory,
    board: startBoard,
    turn: startTurn,
    gameStatus: startGameStatus,
  };
};

const updateGameStatus = (currentGameStatus: GameStatus, board: string[]): GameStatus => {

    const isGameTied = board
                        .filter((square: string) => {
                          return square === ``;
                        })
                        .length === 0;

    if (isGameTied) {
      return GameStatus.TIE;
    }

    for (const winningState of possibleWinningStates) {
      const [ firstIndex ] = winningState;
      const gameIsWon = allIndicesHaveSameValue(board, winningState);
      if (gameIsWon) {
        return determineWhichPlayerWon(board, firstIndex);
      }
    }

    if (currentGameStatus === GameStatus.CURRENT_PLAYER_X) {
      return GameStatus.CURRENT_PLAYER_O;
    } else {
      return GameStatus.CURRENT_PLAYER_X;
    }
};

const allIndicesHaveSameValue = (board: string[], winningState: number[]): boolean => {
    const [firstIndex, secondIndex, thirdIndex] = winningState;

    if (board[firstIndex] === ``) {
      return false;
    }

    return board[firstIndex] === board[secondIndex] &&
           board[secondIndex] === board[thirdIndex];
};

const determineWhichPlayerWon = (board: string[], firstIndex: number): GameStatus => {
    if (board[firstIndex] === Turn.X) {
      return GameStatus.X_WINS;
    } else {   
      return GameStatus.O_WINS;
    }
};

export default updateGameStatus;
import { Turn } from "./UpdateGameTurn";
import { IGameState } from "src/components/Game";

export enum GameStatus {
    CURRENT_PLAYER_X = "Next Player: X",
    CURRENT_PLAYER_O = "Next Player: O",
    X_WINS = "X has won!",
    O_WINS = "O has won!",
    GAME_OVER = "Game Over :(",
}

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

export const setupGame = (): IGameState => {
    return {
        board: Array(9).fill(``),
        turn: Turn.X,
        gameStatus: GameStatus.CURRENT_PLAYER_X,
    };
}

const updateGameStatus = (currentGameStatus: GameStatus, board: string[]): GameStatus => {

    let isGameOver = true;
    for (const square of board) {
        if (square === ``) {
            isGameOver = false;
        }
    }

    if (isGameOver) {

        return GameStatus.GAME_OVER;
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
}

const determineWhichPlayerWon = (board: string[], firstIndex: number): GameStatus => {
    if (board[firstIndex] === Turn.X) {

        return GameStatus.X_WINS;
    } else {
        
        return GameStatus.O_WINS;
    }
}

export default updateGameStatus;
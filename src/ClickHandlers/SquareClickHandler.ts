import updateTurn from "src/UpdateGameUtils/UpdateGameTurn";
import updateGameStatus from "src/UpdateGameUtils/UpdateGameState";
import GameUtils from "src/ComponentUtils/GameUtils";
import updateGameHistory from "src/UpdateGameUtils/UpdateGameHistory";
import Game from "src/Components/Game";
import BoardUtils from "src/ComponentUtils/BoardUtils";
import SquareUtils from "src/ComponentUtils/SquareUtils";
import Turn from "src/Enums/Turn";
import { IGameState } from '../Components/Game';

const { 
    findIndexOfMatchingBoard, 
    wasMatchingBoardFound, 
    nextHistoryBoardExists,
} = BoardUtils;
const { squareAlreadyFilled } = SquareUtils;
const { gameIsWonOrTied } = GameUtils;

const squareClickHandler = (game: Game, squareIndex: number): void => {
    const board = game.state.board.slice();
    const historyBoards = game.state.history.historyBoards.slice();
    const turns = game.state.history.turns.slice();
    const gameStatusValues = game.state.history.gameStatusValues.slice();
    const { turn, gameStatus, history } = game.state;

    if (gameIsWonOrTied(gameStatus) ||
        squareAlreadyFilled(board, squareIndex)) {
        return;
    }

    const historyBoardIndex = findIndexOfMatchingBoard(historyBoards, board);
    
    if (turn === Turn.X) {
        board[squareIndex] = `X`;
    } else {
        board[squareIndex] = `O`;
    }

    const updatedTurn = updateTurn(turn);
    const updatedGameStatus = updateGameStatus(gameStatus, board);

    if (wasMatchingBoardFound(historyBoardIndex) &&
        nextHistoryBoardExists(historyBoardIndex, historyBoards.length)) {

        updateGameHistory(
            historyBoardIndex, history, game,
            board, updatedTurn, updatedGameStatus
        );

        return;
    }

    historyBoards.push(board);
    turns.push(updatedTurn);
    gameStatusValues.push(updatedGameStatus);

    const updatedHistory = {
        historyBoards,
        turns,
        gameStatusValues,
    };

    game.setState((previousState: IGameState, props: {}) => {
        return {
            history: updatedHistory,
            board,
            turn: updatedTurn,
            gameStatus: updatedGameStatus,
        };
    });
};

export default squareClickHandler;
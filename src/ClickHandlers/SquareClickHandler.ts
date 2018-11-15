import Game from "src/components/Game";
import Turn from "src/enums/Turn";
import updateTurn from "src/updateGame/UpdateGameTurn";
import updateGameStatus from "src/updateGame/UpdateGameState";
import BoardUtils from "src/utils/BoardUtils";
import SquareUtils from "src/utils/SquareUtils";
import GameUtils from "src/utils/GameUtils";
import updateGameHistory from "src/updateGame/UpdateGameHistory";

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

    game.setState(
        {
            history: updatedHistory,
            board,
            turn: updatedTurn,
            gameStatus: updatedGameStatus,
        }
    );
};

export default squareClickHandler;
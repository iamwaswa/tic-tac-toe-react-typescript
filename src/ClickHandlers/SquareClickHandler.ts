import Game from "src/components/Game";
import GameStatus from "src/enums/GameStatus";
import Turn from "src/enums/Turn";
import updateTurn from "src/updateGame/UpdateGameTurn";
import updateGameStatus from "src/updateGame/UpdateGameState";

const squareClickHandler = (game: Game, squareIndex: number): void => {
    const board = game.state.board.slice();
    const historyBoards = game.state.history.historyBoards.slice();
    const { turn, gameStatus } = game.state;
    const { turns, gameStatusValues } = game.state.history;

    if (gameStatus === GameStatus.X_WINS ||
        gameStatus === GameStatus.O_WINS ||
        gameStatus === GameStatus.GAME_OVER) {
        return;
    }

    if (board[squareIndex] !== ``) {
        return;
    }

    if (turn === Turn.X) {
        board[squareIndex] = `X`;
    } else {
        board[squareIndex] = `O`;
    }

    historyBoards.push(board);
    const updatedTurn = updateTurn(turn);
    turns.push(updatedTurn);
    const updatedGameStatus = updateGameStatus(gameStatus, board);
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
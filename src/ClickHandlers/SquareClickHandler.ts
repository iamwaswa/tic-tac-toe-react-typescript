import Game from "src/components/Game";
import GameStatus from "src/enums/GameStatus";
import Turn from "src/enums/Turn";
import updateTurn from "src/updateGame/UpdateGameTurn";
import updateGameStatus from "src/updateGame/UpdateGameState";

const squareClickHandler = (game: Game, squareIndex: number): void => {
    const board = game.state.board.slice();
    const historyBoards = game.state.history.historyBoards.slice();
    const turns = game.state.history.turns.slice();
    const gameStatusValues = game.state.history.gameStatusValues.slice();
    const { turn, gameStatus } = game.state;

    if (gameStatus === GameStatus.X_WINS ||
        gameStatus === GameStatus.O_WINS ||
        gameStatus === GameStatus.GAME_OVER) {
        return;
    }

    if (board[squareIndex] !== ``) {
        return;
    }

    let historyBoardIndex = -1;
    for (let index = 0; index < historyBoards.length; index++) {
        const areSame = areBoardsSame(historyBoards[index], board);
        if (areSame) {
            historyBoardIndex = index;
        }
    }

    if (turn === Turn.X) {
        board[squareIndex] = `X`;
    } else {
        board[squareIndex] = `O`;
    }

    let updatedHistory;
    const updatedTurn = updateTurn(turn);
    const updatedGameStatus = updateGameStatus(gameStatus, board);

    if (historyBoardIndex !== -1 && historyBoardIndex + 1 < historyBoards.length) {
        const areSame = areBoardsSame(historyBoards[historyBoardIndex + 1], board);
        if (!areSame) {
            const updatedHistoryBoards = historyBoards.slice(0, historyBoardIndex + 1);
            const updatedTurns = turns.slice(0, historyBoardIndex + 1);
            const updatedGameStatusvalues = gameStatusValues.slice(0, historyBoardIndex + 1);

            updatedHistoryBoards.push(board);
            updatedTurns.push(updatedTurn);
            updatedGameStatusvalues.push(updatedGameStatus);
            
            updatedHistory = {
                historyBoards: updatedHistoryBoards,
                turns: updatedTurns,
                gameStatusValues: updatedGameStatusvalues,
            };

            game.setState(
                {
                    history: updatedHistory,
                    board,
                    turn: updatedTurn,
                    gameStatus: updatedGameStatus,
                }
            );
        } else {
            updatedHistory = {
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
        }

        return;
    } 

    historyBoards.push(board);
    turns.push(updatedTurn);
    gameStatusValues.push(updatedGameStatus);

    updatedHistory = {
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

const areBoardsSame = (firstBoard: string[], secondBoard: string[]): boolean => {
    for (let index = 0; index < firstBoard.length; index++) {
        if (firstBoard[index] !== secondBoard[index]) {
            return false;
        }
    }

    return true;
};

export default squareClickHandler;
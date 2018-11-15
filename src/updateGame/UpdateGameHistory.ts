import BoardUtils from "src/utils/BoardUtils";
import IHistory from 'src/interfaces/IHistory';
import GameStatus from 'src/enums/GameStatus';
import Game from "src/components/Game";
import Turn from "src/enums/Turn";

const { areBoardsSame } = BoardUtils;

const updateGameHistory = (
    (historyBoardIndex: number, history: IHistory, 
        game: Game, currentBoard: string[],
        updatedTurn: Turn, updatedGameStatus: GameStatus): void => {

        const { turns, gameStatusValues } = history;
        const historyBoards = history.historyBoards.slice();
        const expectedNextBoardFromHistory = historyBoards[historyBoardIndex + 1];

        if (areBoardsSame(currentBoard, expectedNextBoardFromHistory)) {
            updateGameAndKeepHistory(
                game, historyBoards, turns, gameStatusValues,
                currentBoard, updatedTurn, updatedGameStatus
            );
        } else {
            updateGameAndHistory(
                game, historyBoards, turns, gameStatusValues,
                currentBoard, updatedTurn, updatedGameStatus, 
                historyBoardIndex
            );
        } 
    }
);

const updateGameAndKeepHistory = (
    (game: Game, historyBoards: string[][], 
        turns: Turn[], gameStatusValues: GameStatus[],
        currentBoard: string[], updatedTurn: Turn,
        updatedGameStatus: GameStatus): void => {

        game.setState(
            {
                history: {
                    historyBoards,
                    turns,
                    gameStatusValues,
                },
                board: currentBoard,
                turn: updatedTurn,
                gameStatus: updatedGameStatus,
            }
        );
    }
);

const updateGameAndHistory = (
    (game: Game, historyBoards: string[][],
        turns: Turn[], gameStatusValues: GameStatus[],
        currentBoard: string[], updatedTurn: Turn,
        updatedGameStatus: GameStatus, historyBoardIndex: number): void => {

        const updatedHistoryBoards = historyBoards.slice(0, historyBoardIndex + 1);
        const updatedTurns = turns.slice(0, historyBoardIndex + 1);
        const updatedGameStatusvalues = gameStatusValues.slice(0, historyBoardIndex + 1);

        updatedHistoryBoards.push(currentBoard);
        updatedTurns.push(updatedTurn);
        updatedGameStatusvalues.push(updatedGameStatus);

        game.setState(
            {
                history: {
                    historyBoards: updatedHistoryBoards,
                    turns: updatedTurns,
                    gameStatusValues: updatedGameStatusvalues,
                },
                board: currentBoard,
                turn: updatedTurn,
                gameStatus: updatedGameStatus,
            }
        );
    }
);

export default updateGameHistory;
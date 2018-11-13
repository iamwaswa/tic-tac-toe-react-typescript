import Game from "src/components/Game";
import Turn from "src/enums/Turn";
import GameStatus from "src/enums/GameStatus";

const historyBtnClickHandler = (game: Game, index: number): void => {
    const { historyBoards, turns, gameStatusValues } = game.state.history;
    const updatedHistoryBoards = historyBoards.slice(0, index + 1);
    const updatedTurns = turns.slice(0, index + 1);
    const updatedGameStatusvalues = gameStatusValues.slice(0, index + 1);
    const updatedBoard = updatedHistoryBoards[index];
    const updatedTurn = updatedTurns[index];
    const updatedGameStatus = updatedGameStatusvalues[index];
    const updatedHistory = {
        historyBoards: updatedHistoryBoards,
        turns: updatedTurns,
        gameStatusValues: updatedGameStatusvalues,
    };

    game.setState(
        {
            history: updatedHistory,
            board: updatedBoard === undefined ? Array(9).fill(``) : updatedBoard,
            turn: updatedTurn === undefined ? Turn.X : updatedTurn,
            gameStatus: updatedGameStatus === undefined ? GameStatus.CURRENT_PLAYER_X : updatedGameStatus,
        }
    );
};

export default historyBtnClickHandler;
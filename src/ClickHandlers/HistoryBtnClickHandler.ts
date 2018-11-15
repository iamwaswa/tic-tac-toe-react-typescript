import Game, { IGameState } from "src/Components/Game";
import Turn from "src/Enums/Turn";
import GameStatus from "src/Enums/GameStatus";

const historyBtnClickHandler = (game: Game, index: number): void => {
  const { historyBoards, turns, gameStatusValues } = game.state.history;
  const updatedHistoryBoards = historyBoards.slice();
  const updatedTurns = turns.slice();
  const updatedGameStatusvalues = gameStatusValues.slice();
  const updatedBoard = updatedHistoryBoards[index];
  const updatedTurn = updatedTurns[index];
  const updatedGameStatus = updatedGameStatusvalues[index];
  const updatedHistory = {
    historyBoards: updatedHistoryBoards,
    turns: updatedTurns,
    gameStatusValues: updatedGameStatusvalues,
  };

  game.setState((previousState: IGameState, props: {}) => {
    return {
      history: updatedHistory,
      board: updatedBoard === undefined ? 
             Array(9).fill(``) : updatedBoard,
      turn: updatedTurn === undefined ? 
            Turn.X : updatedTurn,
      gameStatus: updatedGameStatus === undefined ? 
                  GameStatus.CURRENT_PLAYER_X : updatedGameStatus,
    };
  });
};

export default historyBtnClickHandler;
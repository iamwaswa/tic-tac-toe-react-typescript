import BoardUtils from 'src/ComponentUtils/BoardUtils';
import IHistory from 'src/Interfaces/IHistory';
import GameStatus from 'src/Enums/GameStatus';
import Game from 'src/Components/Game';
import Turn from 'src/Enums/Turn';

const { areBoardsSame } = BoardUtils;

const updateGameHistory = (
  (historyBoardIndex: number, history: IHistory,
   game: Game, currentBoard: string[],
   updatedTurn: Turn, updatedGameStatus: GameStatus,
   nextMoveIndex: number): void => {

    const { turns, gameStatusValues, nextMoves } = history;
    const historyBoards = history.historyBoards.slice();
    const expectedNextBoardFromHistory = historyBoards[historyBoardIndex + 1];

    if (areBoardsSame(currentBoard, expectedNextBoardFromHistory)) {
      updateGameAndKeepHistory(
        game, historyBoards, turns, gameStatusValues, nextMoves,
        currentBoard, updatedTurn, updatedGameStatus
      );
    } else {
      updateGameAndHistory(
        game, historyBoards, turns, gameStatusValues, nextMoves,
        currentBoard, updatedTurn, updatedGameStatus,
        historyBoardIndex, nextMoveIndex
      );
    }
  }
);

const updateGameAndKeepHistory = (
  (game: Game, historyBoards: string[][],
   turns: Turn[], gameStatusValues: GameStatus[],
   nextMoves: number[], currentBoard: string[],
   updatedTurn: Turn, updatedGameStatus: GameStatus): void => {

    game.setState(
      {
        history: {
          historyBoards,
          turns,
          gameStatusValues,
          nextMoves,
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
   turns: Turn[], gameStatusValues: GameStatus[], nextMoves: number[],
   currentBoard: string[], updatedTurn: Turn,
   updatedGameStatus: GameStatus, historyBoardIndex: number,
   nextMoveIndex: number): void => {

    const updatedHistoryBoards = historyBoards.slice(0, historyBoardIndex + 1);
    const updatedTurns = turns.slice(0, historyBoardIndex + 1);
    const updatedGameStatusvalues = gameStatusValues.slice(0, historyBoardIndex + 1);
    const updatedNextMoves = nextMoves.slice(0, historyBoardIndex + 1);

    updatedHistoryBoards.push(currentBoard);
    updatedTurns.push(updatedTurn);
    updatedGameStatusvalues.push(updatedGameStatus);
    updatedNextMoves.push(nextMoveIndex);

    game.setState(
      {
        history: {
          historyBoards: updatedHistoryBoards,
          turns: updatedTurns,
          gameStatusValues: updatedGameStatusvalues,
          nextMoves: updatedNextMoves,
        },
        board: currentBoard,
        turn: updatedTurn,
        gameStatus: updatedGameStatus,
      }
    );
  }
);

export default updateGameHistory;
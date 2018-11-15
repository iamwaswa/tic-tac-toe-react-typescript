import GameStatus from "src/Enums/GameStatus";

const gameIsWonOrTied = (
  (gameStatus: GameStatus): boolean => {
    return gameStatus === GameStatus.X_WINS ||
           gameStatus === GameStatus.O_WINS ||
           gameStatus === GameStatus.TIE;
  }
);

const GameUtils = {
  gameIsWonOrTied,
};

export default GameUtils;
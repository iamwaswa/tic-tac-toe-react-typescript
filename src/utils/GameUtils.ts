import GameStatus from "src/enums/GameStatus";

const gameIsWonOrTied = (
    (gameStatus: GameStatus): boolean => {
        return gameStatus === GameStatus.X_WINS ||
            gameStatus === GameStatus.O_WINS ||
            gameStatus === GameStatus.GAME_OVER;
    }
);

const GameUtils = {
    gameIsWonOrTied,
};

export default GameUtils;
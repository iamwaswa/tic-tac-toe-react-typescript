import Game from "src/components/Game";
import { setupGame } from "src/updateGame/UpdateGameState";

const restartBtnClickHandler = (game: Game): void => {
    game.setState(
        setupGame()
    );
};

export default restartBtnClickHandler;
import Game from 'src/Components/Game';
import { setupGame } from 'src/UpdateGameUtils/UpdateGameState';

const restartBtnClickHandler = (game: Game): void => {
  game.setState(setupGame);
};

export default restartBtnClickHandler;
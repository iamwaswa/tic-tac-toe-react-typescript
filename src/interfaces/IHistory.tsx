import Turn from "src/enums/Turn";
import GameStatus from "src/enums/GameStatus";

interface IHistory {
    historyBoards: string[][];
    turns: Turn[];
    gameStatusValues: GameStatus[];
}

export default IHistory;
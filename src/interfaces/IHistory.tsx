import Turn from "src/Enums/Turn";
import GameStatus from "src/Enums/GameStatus";

interface IHistory {
    historyBoards: string[][];
    turns: Turn[];
    gameStatusValues: GameStatus[];
}

export default IHistory;
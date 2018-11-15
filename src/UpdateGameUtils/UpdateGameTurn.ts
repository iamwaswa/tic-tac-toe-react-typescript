import Turn from "src/enums/Turn";

const updateTurn = (currentTurn: Turn): Turn => {
    return currentTurn === Turn.X ? Turn.O : Turn.X;
};

export default updateTurn;
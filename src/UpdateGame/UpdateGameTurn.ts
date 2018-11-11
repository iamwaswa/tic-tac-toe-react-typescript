export enum Turn {
    X = "X",
    O = "O",
};

const updateTurn = (currentTurn: Turn): Turn => {
    return currentTurn === Turn.X ? Turn.O : Turn.X;
}

export default updateTurn;
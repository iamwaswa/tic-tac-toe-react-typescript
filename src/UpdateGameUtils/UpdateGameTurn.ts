import Turn from "src/Enums/Turn";

const updateTurn = (currentTurn: Turn): Turn => {
  return currentTurn === Turn.X ? Turn.O : Turn.X;
};

export default updateTurn;
const squareAlreadyFilled = (
  (board: string[], index: number): boolean => {
    return board[index] !== ``;
  }
);

const SquareUtils = {
  squareAlreadyFilled,
};

export default SquareUtils;
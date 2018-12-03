const squareAlreadyFilled = (
  (board: string[], index: number): boolean => {
    return board[index] !== '';
  }
);

const squareUtils = {
  squareAlreadyFilled,
};

export default squareUtils;
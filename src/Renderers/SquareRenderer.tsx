import Game from "src/components/Game";
import Square from "src/components/Square";
import * as React from "react";

const renderSquares = (game: Game): JSX.Element[] => {
    return Array(game.state.board.length)
        .fill(undefined)
        .map((element: undefined, index: number) => {
            const value = game.state.board[index];
            const handleSquareOnClick = (): void => {
                game.handleSquareOnClick(index);
            };

            return (
                <Square
                    key={ index }
                    value={ value }
                    onClick={ handleSquareOnClick }
                />
            );
        });
};

export default renderSquares;
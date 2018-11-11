import * as React from "react";
import { Component } from "react";
import styles from "src/styles";
import Board from "./Board";
import Square from "./Square";
import updateTurn, { Turn } from "src/UpdateGame/UpdateGameTurn";
import updateGameStatus, { GameStatus, setupGame } from "src/UpdateGame/UpdateGameStatus";

export interface IGameState {
    board: string[];
    turn: Turn;
    gameStatus: GameStatus;
}

class Game extends Component<{}, IGameState> {

    constructor(props: {}) {
        super(props);
        this.state = setupGame();
        this.handleSquareOnClick = this.handleSquareOnClick.bind(this);
        this.handleRestartOnClick = this.handleRestartOnClick.bind(this);
    }

    private handleSquareOnClick = (squareIndex: number): void => {
        const board = this.state.board.slice();
        const  { turn, gameStatus } = this.state;

        if(gameStatus === GameStatus.X_WINS ||
            gameStatus === GameStatus.O_WINS ||
            gameStatus === GameStatus.GAME_OVER) {
                return;
        }

        if (turn === Turn.X) {
            board[squareIndex] = `X`;
        } else {
            board[squareIndex] = `O`;
        }

        this.setState({
            board,
            turn: updateTurn(turn),
            gameStatus: updateGameStatus(gameStatus, board),
        });
    }

    private renderSquares = (): JSX.Element[] => {
        return Array(this.state.board.length)
            .fill(undefined)
            .map((element: undefined, index: number) => {

                const value = this.state.board[index];
                const handleSquareOnClick = (): void => {
                    this.handleSquareOnClick(index);
                }

                return <Square
                            key={index}
                            value={value}
                            onClick={handleSquareOnClick}
                        />;
            });
    }

    private handleRestartOnClick = (): void => {
        this.setState(setupGame());
    }

    public render(): JSX.Element {

        const renderSquares = (): JSX.Element[] => {
            return this.renderSquares();
        }

        return (
            <section>
                <p style={styles.gameStatus}>
                    {this.state.gameStatus}
                </p>
                <section style={styles.game}>
                    <Board renderSquares={renderSquares}/>
                    <button 
                        style={styles.restartButton}
                        onClick={this.handleRestartOnClick}>
                        Restart
                    </button>
                </section>
            </section>
        );
    }
};

export default Game;
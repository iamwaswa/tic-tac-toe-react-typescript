import Square from "./Square";
import HistoryButton from './HistoryButton';
import updateGameStatus, { setupGame } from "src/updateGame/UpdateGameState";
import * as React from "react";
import { Component } from "react";
import Turn from "src/enums/Turn";
import GameStatus from "src/enums/GameStatus";
import IHistory from "src/interfaces/IHistory";
import Display from "./Display";
import updateTurn from "src/updateGame/UpdateGameTurn";

export interface IGameState {
    history: IHistory;
    board: string[];
    turn: Turn;
    gameStatus: GameStatus;
}

class Game extends Component<{}, IGameState>{
    
    constructor (props: {}) {
        super(props);
        this.state = setupGame();
        this.handleSquareOnClick = this.handleSquareOnClick.bind(this);
        this.renderHistoryButtons = this.renderHistoryButtons.bind(this);
        this.handleRestartOnClick = this.handleRestartOnClick.bind(this);
        this.handleHistoryButtonOnClick = this.handleHistoryButtonOnClick.bind(this);
    }

    private handleSquareOnClick = (squareIndex: number): void => {
        const board = this.state.board.slice();
        const historyBoards = this.state.history.historyBoards.slice();
        const { turn, gameStatus } = this.state;
        const { turns, gameStatusValues } = this.state.history;

        if (gameStatus === GameStatus.X_WINS ||
            gameStatus === GameStatus.O_WINS ||
            gameStatus === GameStatus.GAME_OVER) {
            return;
        }

        if (board[squareIndex] !== ``) {
            return;
        }

        if (turn === Turn.X) {
            board[squareIndex] = `X`;
        } else {
            board[squareIndex] = `O`;
        }

        historyBoards.push(board);
        const updatedTurn = updateTurn(turn);
        turns.push(updatedTurn);
        const updatedGameStatus = updateGameStatus(gameStatus, board);
        gameStatusValues.push(updatedGameStatus);

        const updatedHistory = {
            historyBoards,
            turns,
            gameStatusValues,
        };

        this.setState(
            {
                history: updatedHistory,
                board,
                turn: updatedTurn,
                gameStatus: updatedGameStatus,
            }
        );
    }

    private renderHistoryButtons = (): JSX.Element[] => {
        const { historyBoards } = this.state.history;

        return historyBoards
                .map((historyBoard: string[], index: number) => {
                    const handleHistoryButtonOnClick = (): void => {
                        this.handleHistoryButtonOnClick(index);
                    };

                    return (
                        <HistoryButton 
                            key = { index }
                            position = { index }
                            onClick={ handleHistoryButtonOnClick }
                        />
                    );
                });

    }

    private renderSquares = (): JSX.Element[] => {
        return Array(this.state.board.length)
            .fill(undefined)
            .map((element: undefined, index: number) => {
                const value = this.state.board[index];
                const handleSquareOnClick = (): void => {
                    this.handleSquareOnClick(index);
                };

                return (
                    <Square
                        key={ index }
                        value={ value }
                        onClick={ handleSquareOnClick }
                    />
                );
            });
    }

    private handleRestartOnClick = (): void => {
        this.setState(
            setupGame()
        );
    }

    private handleHistoryButtonOnClick = (index: number): void => {
        const { historyBoards, turns, gameStatusValues } = this.state.history;
        const updatedHistoryBoards = historyBoards.slice(0, index + 1);
        const updatedTurns = turns.slice(0, index + 1);
        const updatedGameStatusvalues = gameStatusValues.slice(0, index + 1);
        const updatedBoard = updatedHistoryBoards[index];
        const updatedTurn = updatedTurns[index];
        const updatedGameStatus = updatedGameStatusvalues[index];
        const updatedHistory = {
            historyBoards: updatedHistoryBoards,
            turns: updatedTurns,
            gameStatusValues: updatedGameStatusvalues,
        };

        this.setState(
            {
                history: updatedHistory,
                board: updatedBoard === undefined ? Array(9).fill(``) : updatedBoard,
                turn: updatedTurn === undefined ? Turn.X : updatedTurn,
                gameStatus: updatedGameStatus === undefined ? GameStatus.CURRENT_PLAYER_X : updatedGameStatus,
            }
        );
    }

    public render (): JSX.Element {

        return (
            <Display 
                message = { this.state. gameStatus }
                renderSquares = { this.renderSquares }
                onRestartClick = { this.handleRestartOnClick }
                renderHistoryButtons = { this.renderHistoryButtons }
            />
        );
    }
}

export default Game;
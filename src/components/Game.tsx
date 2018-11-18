import { setupGame } from "src/UpdateGameUtils/UpdateGameState";
import * as React from "react";
import { Component } from "react";
import Turn from "src/Enums/Turn";
import GameStatus from "src/Enums/GameStatus";
import IHistory from "src/Interfaces/IHistory";
import Display from "./Display";
import squareClickHandler from "src/ClickHandlers/SquareClickHandler";
import historyBtnClickHandler from '../ClickHandlers/HistoryBtnClickHandler';
import restartBtnClickHandler from "src/ClickHandlers/RestartBtnClickHandler";
import renderHistoryBtnList from "src/Renderers/HistoryBtnListRenderer";
import renderSquares from "src/Renderers/SquareListRenderer";

export interface IGameState {
  history: IHistory;
  board: string[];
  turn: Turn;
  gameStatus: GameStatus;
  winningPositions: number[];
}

class Game extends Component<{}, IGameState>{
    
  constructor (props: {}) {
    super(props);
    this.state = setupGame();
    this.renderHistoryButtons = this.renderHistoryButtons.bind(this);
    this.handleSquareOnClick = this.handleSquareOnClick.bind(this);
    this.handleRestartOnClick = this.handleRestartOnClick.bind(this);
    this.handleHistoryButtonOnClick = this.handleHistoryButtonOnClick.bind(this);
  }

  private renderHistoryButtons = (): JSX.Element[] => {
    return renderHistoryBtnList(this);
  }

  private renderSquares = (): JSX.Element[] => {
    return renderSquares(this);
  }

  private handleRestartOnClick = (): void => {
    restartBtnClickHandler(this);
  }

  public handleSquareOnClick = (squareIndex: number): void => {
    squareClickHandler(this, squareIndex);
  }

  public handleHistoryButtonOnClick = (index: number): boolean => {
    return historyBtnClickHandler(this, index);
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
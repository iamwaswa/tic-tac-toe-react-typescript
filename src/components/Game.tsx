import { setupGame } from 'src/UpdateGameUtils/UpdateGameState';
import * as React from 'react';
import Turn from 'src/Enums/Turn';
import GameStatus from 'src/Enums/GameStatus';
import IHistory from 'src/Interfaces/IHistory';
import Display from './Display';
import SquareClickHandler from 'src/ClickHandlers/SquareClickHandler';
import HistoryBtnClickHandler from '../ClickHandlers/HistoryBtnClickHandler';
import RestartBtnClickHandler from 'src/ClickHandlers/RestartBtnClickHandler';
import HistoryBtnListRenderer from 'src/Renderers/HistoryBtnListRenderer';
import SquareListRenderer from 'src/Renderers/SquareListRenderer';

export interface IGameState {
  history: IHistory;
  board: string[];
  turn: Turn;
  gameStatus: GameStatus;
  winningPositions: number[];
}

class Game extends React.Component<{}, IGameState>{

  constructor (props: {}) {
    super(props);
    this.state = setupGame();
    this.renderHistoryButtons = this.renderHistoryButtons.bind(this);
    this.handleSquareOnClick = this.handleSquareOnClick.bind(this);
    this.handleRestartOnClick = this.handleRestartOnClick.bind(this);
    this.handleHistoryButtonOnClick = this.handleHistoryButtonOnClick.bind(this);
  }

  private renderHistoryButtons = (): JSX.Element[] => {
    return HistoryBtnListRenderer(this);
  }

  private renderSquares = (): JSX.Element[] => {
    return SquareListRenderer(this);
  }

  private handleRestartOnClick = (): void => {
    RestartBtnClickHandler(this);
  }

  public handleSquareOnClick = (squareIndex: number): void => {
    SquareClickHandler(this, squareIndex);
  }

  public handleHistoryButtonOnClick = (index: number): boolean => {
    return HistoryBtnClickHandler(this, index);
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
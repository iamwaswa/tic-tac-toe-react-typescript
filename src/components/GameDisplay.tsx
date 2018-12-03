import * as React from 'react';
import styles from 'src/styles';
import Board from './Board';
import ButtonList from './ButtonList';

interface IGameDisplayProps {
  renderSquares: () => JSX.Element[];
  onRestartClick: () => void;
  renderHistoryButtons: () => JSX.Element[];
}

const gameDisplay: React.FunctionComponent<IGameDisplayProps> = (
  (props: IGameDisplayProps): JSX.Element => {
    return (
      <section style = { styles.game }>
        <Board
          renderSquares = { props.renderSquares }
        />
        <ButtonList
          onRestartClick = { props.onRestartClick }
          renderHistoryButtons = { props.renderHistoryButtons }
        />
      </section>
    );
  }
);

export default gameDisplay;
import * as React from 'react';
import styles from 'src/styles';

interface IBoardProps {
  renderSquares: () => JSX.Element[];
}

const board: React.FunctionComponent<IBoardProps> = (
  (props: IBoardProps): JSX.Element => {
    return (
      <section
        style = { styles.board }
      >
        { props.renderSquares() }
      </section>
    );
  }
);

export default board;
import * as React from 'react';
import { FunctionComponent } from 'react';
import styles from "src/styles";
import Coordinate from "src/Types/Coordinate";

interface IHistoryButtonProps {
  position: number;
  coordinate: Coordinate;
  onClick: () => void;
}

const HistoryButton: FunctionComponent<IHistoryButtonProps> = (
  ({ position, coordinate, onClick }: IHistoryButtonProps): JSX.Element => {
    return ( 
      <section 
        style = { styles.historySection }
      >
        <button 
          onClick = { onClick }
        >
          { `Go back to move #${position + 1}` }
        </button>
        <p style = { styles.historySectionParagraph }>
          { `Column: ${ coordinate.Column }, Row: ${ coordinate.Row }` }
        </p>
      </section>
    );
  }
);

export default HistoryButton;
import * as React from 'react';
import { FunctionComponent } from 'react';
import MessageDisplay from "./MessageDisplay";
import GameDisplay from "./GameDisplay";

interface IDisplayProps {
  message: string;
  renderSquares: () => JSX.Element[];
  onRestartClick: () => void;
  renderHistoryButtons: () => JSX.Element[];
}

const Display: FunctionComponent<IDisplayProps> = (
  (props: IDisplayProps): JSX.Element => {
    return (  
      <section>
        <MessageDisplay
          message = { props.message }
        />
        <GameDisplay
          renderSquares = { props.renderSquares }
          onRestartClick = { props.onRestartClick }
          renderHistoryButtons = { props.renderHistoryButtons }
        />
      </section>
    );
  }
);

export default Display;
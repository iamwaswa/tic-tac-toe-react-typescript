import * as React from 'react';
import styles from 'src/styles';

interface IMessageDisplay {
  message: string;
}

const messageDisplay: React.FunctionComponent<IMessageDisplay> = (
  (props: IMessageDisplay): JSX.Element => {
    return (
      <p style = { styles.gameStatus }>
        { props.message }
      </p>
    );
  }
);

export default messageDisplay;
import * as React from 'react';
import styles from 'src/styles';

interface IRestartButtonProps {
  onClick: () => void;
}

const restartButton: React.FunctionComponent<IRestartButtonProps> = (
  (props: IRestartButtonProps): JSX.Element => {
    return (
      <button
        style = { styles.restartButton }
        onClick = { props.onClick }
      >
        Restart
      </button>
    );
  }
);

export default restartButton;
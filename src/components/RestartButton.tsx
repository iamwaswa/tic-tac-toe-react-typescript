import * as React from 'react';
import { FunctionComponent } from 'react';
import styles from "src/styles";

interface IRestartButtonProps {
    onClick: () => void;
}

const IRestartButton: FunctionComponent<IRestartButtonProps> = ( 
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

export default IRestartButton;
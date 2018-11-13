import * as React from 'react';
import { FunctionComponent } from 'react';
import styles from "src/styles";

interface IHistoryButtonProps {
    position: number;
    onClick: () => void;
}

const HistoryButton: FunctionComponent<IHistoryButtonProps> = 
    (props: IHistoryButtonProps): JSX.Element => {
    return ( 
        <button 
            onClick = { props.onClick }
            style = { styles.historyButton }
        >
            {`Go back to move number ${props.position + 1}`}
        </button>
    );
};

export default HistoryButton;
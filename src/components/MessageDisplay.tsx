import * as React from 'react';
import { FunctionComponent } from 'react';
import styles from "src/styles";

interface IMessageDisplay {
    message: string;
}

const MessageDisplay: FunctionComponent<IMessageDisplay> = (
    (props: IMessageDisplay): JSX.Element => {
        return (  
            <p style={ styles.gameStatus }>
                { props.message }
            </p>
        );
    }
);

export default MessageDisplay;
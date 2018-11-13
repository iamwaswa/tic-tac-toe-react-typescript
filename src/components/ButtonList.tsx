import * as React from 'react';
import { FunctionComponent } from 'react';
import styles from "src/styles";
import HistoryButtonList from "./HistoryButtonList";
import RestartButton from "./RestartButton";

interface IButtonListProps {
    onRestartClick: () => void;
    renderHistoryButtons: () => JSX.Element[];
}

const ButtonList: FunctionComponent<IButtonListProps> = (
    (props: IButtonListProps): JSX.Element => {
        return (  
            <section style={ styles.buttons }>
                <RestartButton
                    onClick={ props.onRestartClick }
                />
                <HistoryButtonList
                    renderHistoryButtons={ props.renderHistoryButtons }
                />
            </section>
        );
    }
);

export default ButtonList;
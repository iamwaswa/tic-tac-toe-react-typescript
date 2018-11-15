import { FunctionComponent } from 'react';
import * as React from "react";
import styles from "src/styles";

interface IHistoryButtonListProps {
    renderHistoryButtons: () => JSX.Element[];
}

const HistoryButtonList: FunctionComponent<IHistoryButtonListProps> = (
    (props: IHistoryButtonListProps): JSX.Element => {
        return (  
            <section 
                style = { styles.historyButtonList }
            >
                { props.renderHistoryButtons() }
            </section>
        );
    }
);

export default HistoryButtonList;
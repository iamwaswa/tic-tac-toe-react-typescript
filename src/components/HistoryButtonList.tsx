import { FunctionComponent } from 'react';
import * as React from "react";

interface IHistoryButtonListProps {
    renderHistoryButtons: () => JSX.Element[];
}

const HistoryButtonList: FunctionComponent<IHistoryButtonListProps> = (
        (props: IHistoryButtonListProps): JSX.Element => {
            return (  
                <section>
                    {
                        props.renderHistoryButtons()
                    }
                </section>
            );
    }
);

export default HistoryButtonList;
import * as React from 'react';
import { FunctionComponent } from 'react';

interface IHistoryButtonProps {
    key: number;
    onClick: void;
}

const HistoryButton: FunctionComponent<IHistoryButtonProps> = 
    (props: IHistoryButtonProps): JSX.Element => {
    return ( 
        <button>
            {`Go back to move number ${props.key + 1}`}
        </button>
    );
};

export default HistoryButton;
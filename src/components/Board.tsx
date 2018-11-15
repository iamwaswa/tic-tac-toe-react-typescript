import * as React from 'react';
import { FunctionComponent } from 'react';
import styles from "src/styles";

interface IBoardProps {
    renderSquares: () => JSX.Element[];
}

const Board: FunctionComponent<IBoardProps> = (
    (props: IBoardProps): JSX.Element => {
        return ( 
            <section 
                style = { styles.board }
            >
                { props.renderSquares() }
            </section>
        );
    }
);

export default Board;
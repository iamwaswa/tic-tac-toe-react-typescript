import { FunctionComponent } from 'react';
import styles from "src/styles";
import * as React from "react";

interface ISquareProps {
    value: string;
    onClick: () => void;
}

const Square: FunctionComponent<ISquareProps> = (
    (props: ISquareProps): JSX.Element => {  
        
        return ( 
            <section 
                style = { styles.square } 
                onClick = { props.onClick }
            >
                { props.value }
            </section>
        );
    }
);

export default Square;
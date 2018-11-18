import { FunctionComponent, CSSProperties } from 'react';
import * as React from "react";

interface ISquareProps {
  value: string;
  style: () => CSSProperties;
  onClick: () => void;
}

const Square: FunctionComponent<ISquareProps> = (
  ({ value, style, onClick }: ISquareProps): JSX.Element => {    
    return ( 
      <section 
        style = { style() } 
        onClick = { onClick }
      >
        { value }
      </section>
    );
  }
);

export default Square;
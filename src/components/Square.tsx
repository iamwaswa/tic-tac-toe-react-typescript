import * as React from 'react';

interface ISquareProps {
  value: string;
  style: () => React.CSSProperties;
  onClick: () => void;
}

const square: React.FunctionComponent<ISquareProps> = (
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

export default square;
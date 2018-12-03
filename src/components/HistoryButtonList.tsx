import * as React from 'react';
import styles from 'src/styles';

interface IHistoryButtonListProps {
  renderHistoryButtons: () => JSX.Element[];
}

const historyButtonList: React.FunctionComponent<IHistoryButtonListProps> = (
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

export default historyButtonList;
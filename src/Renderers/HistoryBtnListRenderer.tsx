import HistoryButton from "src/components/HistoryButton";
import * as React from "react";
import Game from "src/components/Game";

const renderHistoryBtnList = (game: Game): JSX.Element[] => {
    const { historyBoards } = game.state.history;

    return historyBoards
        .map((historyBoard: string[], index: number) => {
            const handleHistoryButtonOnClick = (): void => {
                game.handleHistoryButtonOnClick(index);
            };

            return (
                <HistoryButton
                    key={ index }
                    position={ index }
                    onClick={ handleHistoryButtonOnClick }
                />
            );
        });

};

export default renderHistoryBtnList;
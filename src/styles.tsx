// tslint:disable-next-line:typedef
const styles = {
    game: {
        display: `flex`,
        alignItems: `flex-start`,
    },
    gameStatus: {
        margin: `0px 0px 10px 0px`,
    },
    board: {
        width: `95px`,
        display: `grid`,
        gridTemplateRows: `repeat(3, auto)`,
        gridTemplateColumns: `repeat(3, auto)`,
    },
    square: {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        border: `1px solid black`,
        width: `30px`,
        height: `30px`,
    },
    restartButton: {
        marginLeft: `5px`,
        border: `1px solid black`,
        backgroundColor: `white`,
    },
};

export default styles;
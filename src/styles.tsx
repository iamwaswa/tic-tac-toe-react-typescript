document.body.style.margin = `0`;
document.body.style.padding = `1em`;
document.body.style.fontSize = `14px`;
document.body.style.fontWeight = `normal` as `normal`;
document.body.style.fontFamily = `Century Gothic, Futura, sans-serif`;
document.body.style.minWidth = `150px`;

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
    buttons: {
        display: `flex`,
        flexDirection: `column` as `column`,
        marginLeft: `1em`,
    },
    restartButton: {
        maxWidth: `55px`,
        marginBottom: `1em`,
    },
    historyButtonList: {
        display: `flex`,
        flexDirection: `column` as `column`,
    },
    historyButton: {
        marginBottom: `1em`,
    },
};

export default styles;
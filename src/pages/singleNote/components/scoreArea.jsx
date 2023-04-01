import {useStyles} from "../singleNote.css.js";

function ScoreArea({correct, asked}) {
    const classes = useStyles();
    return (
    <div className={classes.scoreArea}>
        <h1 className={classes.scoreCorrect}>{correct}</h1>
        <h1 className={classes.scoreWrong}>{asked-correct}</h1>
    </div>
    )
}

export default ScoreArea;

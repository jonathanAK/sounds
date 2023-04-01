import {useStyles} from "../../singleNote.css.js";
import ManualScore from "./manualScore.jsx";
import {Switch} from "@mui/material";
import Button from "@mui/material/Button";
import repeatIcon from "../../../../assets/repeat.png";

function ControlsArea({manualScore, setManualScore, checkAnswer, repeat, mutePiano, setMutePiano, finishGame}) {
    const classes = useStyles();
    return (
        <>
            <div className={classes.gameControls}>
                {manualScore && <ManualScore {...{checkAnswer}} />}
            </div>
            <span>
                Score Manually
                    <Switch
                        checked={manualScore}
                        onChange={() => setManualScore(!manualScore)}
                    />
            </span>
            <Button onClick={repeat}><img src={repeatIcon} className={classes.repeatButton}/></Button>
            <span>
                Mute Piano
                    <Switch
                        checked={mutePiano}
                        onChange={() => setMutePiano(!mutePiano)}
                    />
            </span>
            <Button onClick={finishGame} variant="outlined">End Game</Button>
        </>
    )
}

export default ControlsArea;

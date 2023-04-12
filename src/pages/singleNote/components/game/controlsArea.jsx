import {useStyles} from "../../singleNote.css.js";
import ManualScore from "./manualScore.jsx";
import {Switch} from "@mui/material";
import Button from "@mui/material/Button";
import repeatIcon from "../../../../assets/repeat.png";
import {playScale} from "../../../../services/midi.js";

function ControlsArea({manualScore, setManualScore, checkAnswer, repeat, mutePiano, setMutePiano, finishGame}) {
    const classes = useStyles();
    return (
        <div className={classes.controlsArea}>
            <div className={classes.manualScoring}>
                {manualScore && <ManualScore {...{checkAnswer}} />}
            </div>
            <div>
            <span>
                Score Manually
                    <Switch
                        checked={manualScore}
                        onChange={() => setManualScore(!manualScore)}
                    />
            </span>
                <Button onClick={repeat}><img src={repeatIcon} className={classes.repeatButton}
                                              alt="play Again"/></Button>
                <span>
                Mute Piano
                    <Switch
                        checked={mutePiano}
                        onChange={() => setMutePiano(!mutePiano)}
                    />
            </span>
            </div>
            <Button onClick={finishGame} variant="contained">End Game</Button>
            <Button onClick={()=>playScale({key:'C',octave: 4})} variant="outlined">Play Scale</Button>
        </div>
    )
}

export default ControlsArea;

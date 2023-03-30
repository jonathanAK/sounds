import {playNoteOnScale} from '../../services/midi';
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";
import Piano from "../../components/piano.jsx";
import scales from "../../services/scales.json";
import {Switch} from "@mui/material";
import repeatIcon from "../../assets/repeat.png";
import {useStyles} from "./singleNote.css.js";

function SingleNoteGame({scale, playableDegrees, selectedOctave = 4, increaseQuestionCount, increaseCorrectCount, asked, correct}) {
    const [degree, setDegree] = useState(-1);
    const [message, setMessage] = useState('');
    const [octave, setOctave] = useState(selectedOctave);
    const [manualScore, setManualScore] = useState(false);
    const [mutePiano, setMutePiano] = useState(false);
    const classes = useStyles();

    const newNote = () => {
        const newDegree = playableDegrees[Math.floor(Math.random() * playableDegrees.length)];
        const newOctave = selectedOctave < 0 ? Math.floor(Math.random() * 5 + 3) : selectedOctave;
        setDegree(newDegree);
        setOctave(newOctave);
        playNoteOnScale({scale, degree: newDegree, octave: newOctave});
    };

    const repeat = () => {
        playNoteOnScale({scale, degree, octave})
    };

    const checkAnswer = (noteNames, manual) => {
        increaseQuestionCount();
        const correct = !noteNames ? manual : noteNames.includes(scales[scale][degree - 1]);
        const delay = mutePiano ? 0 : 1500;
        setTimeout(newNote, delay);
        setTimeout(() => setMessage(''), 1500);
        if(correct){
            increaseCorrectCount();
        }
        if (!noteNames) return setMessage('');
        if (correct) {
            setMessage('correct');
            return;
        }
        setMessage(`wrong played: ${scales[scale][degree - 1]} you pressed: ${noteNames[0]}`);
    };

    const pianoPressed = (noteNames) => {
        if (manualScore) return;
        checkAnswer(noteNames);
    }

    useEffect(() => {
        newNote();
    }, []);

    return (
        <div>
            <div className={classes.gameControls}>
            {manualScore && <>
                    <Button variant="contained" color="success" onClick={() => checkAnswer(null, true)}>
                        Success
                    </Button>
                    <Button variant="outlined" color="error" onClick={() => checkAnswer(null, false)}>
                        wrong
                    </Button>
            </>}
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
            <div className={classes.message}><h2>{message}</h2></div>
            <div className={classes.piano}>
                <Piano callback={pianoPressed} octave={octave} mute={mutePiano}/>
            </div><div className={classes.scoreArea}>
                <h1 className={classes.scoreCorrect}>{correct}</h1>
                <h1 className={classes.scoreWrong}>{asked-correct}</h1>
            </div>
        </div>
    )
}

export default SingleNoteGame;

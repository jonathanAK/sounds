import {playNoteOnScale} from '../../services/midi';
import {useEffect, useState} from "react";
import Piano from "../../components/piano.jsx";
import scales from "../../services/scales.json";
import {useStyles} from "./singleNote.css.js";
import ScoreDialog from "./components/scoreDialog.jsx";
import ScoreArea from "./components/scoreArea";
import ControlsArea from "./components/controlsArea.jsx";

let delayedNoteTimeOut;
let score = {};
let started = 0;

function SingleNoteGame({
                            scale,
                            noRepeat,
                            playableDegrees,
                            selectedOctave = 4,
                            increaseQuestionCount,
                            increaseCorrectCount,
                            asked,
                            correct,setShowSettings
                        }) {
    const [degree, setDegree] = useState(-1);
    const [message, setMessage] = useState('');
    const [octave, setOctave] = useState(selectedOctave);
    const [manualScore, setManualScore] = useState(false);
    const [mutePiano, setMutePiano] = useState(false);
    const [finished, setFinished] = useState(false);
    const classes = useStyles();

    const newNote = () => {
        const newDegree = playableDegrees[Math.floor(Math.random() * playableDegrees.length)];
        const newOctave = selectedOctave < 0 ? Math.floor(Math.random() * 5 + 3) : selectedOctave;
        if (noRepeat && degree === newDegree && octave === newOctave) return newNote();
        setDegree(newDegree);
        setOctave(newOctave);
        playNoteOnScale({scale, degree: newDegree, octave: newOctave});
    };

    const repeat = () => {
        playNoteOnScale({scale, degree, octave})
    };

    const playNextNote = () => {
        const delay = mutePiano ? 0 : 1000;
        clearTimeout(delayedNoteTimeOut);
        delayedNoteTimeOut = setTimeout(newNote, delay);
    };
    const checkAnswer = (noteNames, manual) => {
        increaseQuestionCount();
        const correct = !noteNames ? manual : noteNames.includes(scales[scale][degree - 1]);
        playNextNote();
        setTimeout(() => setMessage(''), 1500);
        if (correct) {
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

    const finishGame = () => {
        setFinished(true);
        const time = (Date.now - started)/1000;
        score = {correct, asked, time};
    };

    const onCloseScore = () =>{
        setShowSettings(true);
        setFinished(false);
    }

    useEffect(() => {
        setTimeout(newNote, 1500);
        started = Date.now()-1500;
    }, []);

    return (
        <div>
            <ControlsArea {...{manualScore, setManualScore, checkAnswer, repeat, mutePiano, setMutePiano, finishGame }}/>
            <div className={classes.message}><h2>{message}</h2></div>
            <div className={classes.piano}>
                <Piano callback={pianoPressed} octave={octave} mute={mutePiano}/>
            </div>
            <ScoreArea {...{correct, asked}}/>
            <ScoreDialog {...score} open={finished} onClose={onCloseScore}/>
        </div>
    )
}

export default SingleNoteGame;

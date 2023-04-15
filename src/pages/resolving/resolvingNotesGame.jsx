import {playNoteOnScale, playScale} from '../../services/midi';
import {useEffect, useState} from "react";
import scales from "../../services/scales.json";
import {useStyles} from "./ResolvingNotes.css.js";

import ScoreDialog from "./scoreDialog.jsx";
import ScoreArea from "./scoreArea";
import ControlsArea from "./controlsArea.jsx";

let delayedNoteTimeOut;
let score = {};
let started = 0;
let specificGrade = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];

function SingleNoteGame({
                            scale,
                            noRepeat,
                            selectedOctave = 4,
                            increaseQuestionCount,
                            increaseCorrectCount,
                            asked, correct,
                            setShowSettings
                        }) {
    const [degree, setDegree] = useState(-1);
    const [message, setMessage] = useState('');
    const [octave, setOctave] = useState(selectedOctave);
    const [manualScore, setManualScore] = useState(false);
    const [mutePiano, setMutePiano] = useState(false);
    const [finished, setFinished] = useState(false);
    const classes = useStyles();

    const newNote = () => {
        const newDegree = playableDegrees[Math.floor(Math.random() * 8)];
        const newOctave = selectedOctave < 0 ? Math.floor((Math.random() * 4) + 3) : selectedOctave;
        if (noRepeat && degree === newDegree && octave === newOctave) return newNote();
        setDegree(newDegree);
        setOctave(newOctave);
        playNoteOnScale({scale, degree: newDegree, octave: newOctave});
    };

    const repeat = () => {
        playNoteOnScale({scale, degree, octave});
    };

    const playNextNote = () => {
        clearTimeout(delayedNoteTimeOut);
        delayedNoteTimeOut = setTimeout(newNote, 500);
    };

    const checkAnswer = (answer) => {
        increaseQuestionCount();
        specificGrade[degree-1][0] += 1;
        const correct = !noteNames ? manual : noteNames.includes(scales[scale][degree - 1]);
        playNextNote();
        setTimeout(() => setMessage(''), 1500);
        if (correct) {
            increaseCorrectCount();
            specificGrade[degree-1][1] += 1;
        }
        if (!noteNames) return setMessage('');
        if (correct) {
            setMessage('correct');
            return;
        }
        setMessage(`wrong played: ${scales[scale][degree - 1]} you pressed: ${noteNames[0]}`);
    };

    const finishGame = () => {
        setFinished(true);
        const time = (Date.now() - started)/1000;
        const difficulty = 1;
        score = {correct, asked, time, difficulty, specificGrade, scale};
    };

    const onCloseScore = () =>{
        setShowSettings(true);
        setFinished(false);
    }

    const startPlay = ()=>{
        newNote();
        started = Date.now();
        specificGrade = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
    };

    useEffect(() => {
        playScale({key: scale, octave});
        setTimeout(startPlay, 4500);
    }, []);

    return (
        <div className={classes.resolvingNotesGame}>
            <ControlsArea {...{manualScore, setManualScore, checkAnswer, repeat, mutePiano, setMutePiano, finishGame }}/>
            <div className={classes.message}><h2>{message}</h2></div>
            <div className={classes.answerArea}>

            </div>
            <ScoreArea {...{correct, asked}}/>
            <ScoreDialog {...score} open={finished} onClose={onCloseScore}/>
        </div>
    )
}

export default SingleNoteGame;

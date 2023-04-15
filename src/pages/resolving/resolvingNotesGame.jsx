import {playNoteOnScale, playScale} from '../../services/midi';
import {useEffect, useState} from "react";
import scales from "../../services/scales.json";
import {useStyles} from "./ResolvingNotes.css.js";
import ScoreArea from "../../components/scoreArea/scoreArea.jsx";

// import ScoreDialog from "./scoreDialog.jsx";
// import ControlsArea from "./controlsArea.jsx";
import Button from "@mui/material/Button";
import {KeyboardArrowDown, KeyboardArrowUp} from "@mui/icons-material";

let delayedNoteTimeOut;
let score = {};
let started = 0;
let specificGrade = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];

const degreesResolve = ['b','d','s','d','s','d','u','b'];

function ResolvingNotesGame({
                            scale,noRepeat,selectedOctave = 4,
                            increaseQuestionCount, increaseCorrectCount, setShowSettings,
                            asked, correct,
                        }) {
    const [degree, setDegree] = useState(-1);
    const [message, setMessage] = useState('');
    const [octave, setOctave] = useState(selectedOctave);
    const [finished, setFinished] = useState(false);
    const classes = useStyles();

    const newNote = () => {
        const newDegree = Math.floor(Math.random() * 8)+1;
        const newOctave = selectedOctave < 0 ? Math.floor((Math.random() * 4) + 3) : selectedOctave;
        if (noRepeat && degree === newDegree && octave === newOctave) return newNote();
        playNoteOnScale({scale, degree: newDegree, octave: newOctave});
        setDegree(newDegree);
        setOctave(newOctave);
    };

    const repeat = () => playNoteOnScale({scale, degree, octave});

    const playNextNote = () => {
        clearTimeout(delayedNoteTimeOut);
        delayedNoteTimeOut = setTimeout(newNote, 500);
    };

    const checkAnswer = (answer) => {
        increaseQuestionCount();
        specificGrade[degree-1][0] += 1;
        const correct = degreesResolve[degree-1] === answer;
        playNextNote();
        setTimeout(() => setMessage(''), 1500);
        if (correct) {
            increaseCorrectCount();
            specificGrade[degree-1][1] += 1;
            return setMessage('correct');
        }
        setMessage(`wrong played: ${scales[scale][degree - 1]}`);
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
        specificGrade = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
    };

    useEffect(() => {
        playScale({key: scale, octave});
        setTimeout(startPlay, 4500);
    }, []);

    return (
        <div className={classes.resolvingNotesGame}>
            {/*<ControlsArea {...{checkAnswer, repeat, finishGame }}/>*/}
            <div className={classes.message}><h2>{message}</h2></div>
            <div className={classes.answerArea}>
                <Button className={classes.button} sx={{backgroundColor:'green', color:'white', fontSize: '2em'}} onClick={()=>checkAnswer('b')}>Base</Button>
                <Button className={classes.button} sx={{backgroundColor:'blue', color:'white', fontSize: '2em'}} onClick={()=>checkAnswer('s')}>Stable</Button>
                <Button className={classes.button} sx={{backgroundColor:'purple'}} onClick={()=>checkAnswer('d')}><KeyboardArrowDown sx={{color:'white', fontSize: '10em'}}/></Button>
                <Button className={classes.button} sx={{backgroundColor:'gold'}} onClick={()=>checkAnswer('u')}><KeyboardArrowUp sx={{color:'white', fontSize: '10em'}}/></Button>
            </div>
            <ScoreArea {...{correct, asked}}/>
            {/*<ScoreDialog {...score} open={finished} onClose={onCloseScore}/>*/}
        </div>
    )
}

export default ResolvingNotesGame;

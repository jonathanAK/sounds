import {playNoteOnScale} from '../../services/midi';
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";
import Piano from "../../components/piano.jsx";
import scales from "../../services/scales.json";
import {Switch} from "@mui/material";
import repeatIcon from "../../assets/repeat.png";

function SingleNoteGame({scale, playableDegrees, selectedOctave = 4, increaseQuestionCount, increaseCorrectCount, asked, correct}) {
    const [degree, setDegree] = useState(-1);
    const [message, setMessage] = useState('');
    const [octave, setOctave] = useState(selectedOctave);
    const [manualScore, setManualScore] = useState(false);
    const [mutePiano, setMutePiano] = useState(false);

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
        setTimeout(() => {
            setMessage('');
            newNote();
        }, 1500);
        if (!noteNames) return setMessage('');
        if (correct) {
            setMessage('correct');
            increaseCorrectCount();
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
            <div style={{height: 80, display: 'flex', width: 300, justifyContent: 'space-around', margin: 'auto'}}>
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
            <Button onClick={repeat}><img src={repeatIcon} style={{height: 30, margin: 30}}/></Button>
            <span>
                Mute Piano
                    <Switch
                        checked={mutePiano}
                        onChange={() => setMutePiano(!mutePiano)}
                    />
            </span>
            <div style={{height: 50, lineHeight: 1}}><h2>{message}</h2></div>
            <div style={{width: 600, height: 300}}>
                <Piano callback={pianoPressed} octave={octave} mute={mutePiano}/>
            </div><div style={{display:'flex', justifyContent:'space-around', width:'100%'}}>
                <h1 style={{color:'green'}}>{correct}</h1>
                <h1 style={{color:'red'}}>{asked-correct}</h1>
            </div>
        </div>
    )
}

export default SingleNoteGame;

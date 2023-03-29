import {playNoteOnScale} from '../services/midi';
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";
import Piano from "../components/piano.jsx";
import scales from "../services/scales.json";

function SingleNote() {
    const [degree, setDegree] = useState(-1);
    const [scale, setScale] = useState('C');
    const [message, setMessage] = useState('');

    const newNote = () => {
        setDegree(Math.floor(Math.random() * 2 + 1));
    };
    const repeat = () => {
        playNoteOnScale({scale: 'C', degree})
    };

    const checkAnswer = (note) => {
        const message = note === scales[scale][degree] ?
            'correct' :
            `wrong played: ${scales[scale][degree]} you pressed: ${note}`
        setMessage(message);
    };

    const pianoPressed = (note) => {
        checkAnswer(note);
        setTimeout(()=>{
            setMessage('');
            newNote();
        },1000);
    }

    useEffect(() => {
        if(!(degree>-1)) return;
        playNoteOnScale({scale: 'C', degree})
    }, [degree]);

    return (
        <div>
            <Button onClick={repeat}>repeat</Button>
            <div>{message}</div>
            <div style={{width: 600, height: 300}}>
                <Piano callback={pianoPressed}/>
            </div>

        </div>
    )
}

export default SingleNote

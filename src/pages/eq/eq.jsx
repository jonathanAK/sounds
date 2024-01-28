import {useRef, useState} from "react";
import {useStyles} from "./eq.css.js";
import {Button} from "@mui/material";
import eqSettings from './files.json';
import songs from'./songs.json';
import ScoreDialog from "../singleNote/components/game/scoreDialog.jsx";

const score = {};
function Eq() {
    const audioPlayerOriginal = useRef();
    const audioPlayerModified = useRef();
    const [songIndex, setSongIndex] = useState(Math.floor(Math.random()*songs.length));
    const [eqIndex, setEqIndex] = useState(Math.floor(Math.random()*eqSettings.length));
    const [questionCount, setQuestionCount] = useState(1);
    const [correct, setCorrect] =useState(0);
    const [asked, setAsked] = useState(0);
    const [label, setLabel] = useState(' ');
    const [finished, setFinished] = useState(true);

    const classes = useStyles();
    const original = `./eqSongs/${songs[songIndex]}.mp3`;
    const modified = `./eqSongs/${songs[songIndex]}${eqSettings[eqIndex].fileEnding}.mp3`;


    const onClick = (id) =>{
        console.log("eq,id",eqIndex, id)
        ///DO things
        setAsked(asked+1);
        const wrong = id != eqIndex;
        setLabel(!wrong ? 'Good Job' : ' Try Again');
        if(wrong) return;
        setCorrect(correct+1);
        setQuestionCount(questionCount+1);
        audioPlayerOriginal.current.pause();
        audioPlayerOriginal.current.currentTime = 0;
        audioPlayerOriginal.current.load();
        audioPlayerModified.current.pause();
        audioPlayerModified.current.currentTime = 0;
        audioPlayerModified.current.load();
        setEqIndex(Math.floor(Math.random()*eqSettings.length));
        setSongIndex(Math.floor(Math.random()*songs.length));

    };

    const onCloseScore = () =>{
        setFinished(false);
    };

    return <div>
        <h1>{questionCount}</h1>
        <h2>Original Piece</h2>
        <audio controls ref={audioPlayerOriginal}><source src={original} type="audio/mpeg"/></audio>
        <h2>modified Piece</h2>
        <audio controls ref={audioPlayerModified}><source src={modified} type="audio/mpeg"/></audio>
        <div className={classes.options}>
            {
                eqSettings.map((val, index)=><Button key={index} variant={'outlined'} onClick={()=>onClick(index)}>{val.label}</Button> )
            }
        </div>
        <h1>{label}</h1>
        {/*<ScoreDialog {...score} open={finished} onClose={onCloseScore}/>*/}
    </div>
}

export default Eq

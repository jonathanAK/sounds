import {useEffect, useRef, useState} from "react";
import {useStyles} from "./eq.css.js";
import {Button, Checkbox} from "@mui/material";
import eqSettings from './files.json';
import songs from'./songs.json';
import ScoreArea from "../../components/scoreArea/scoreArea.jsx";
import EqInfo from "./eqInfo.jsx";
import EqRange from "./eqRange.jsx";

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
    const [cheat, setCheat] = useState(false);
    const [finished, setFinished] = useState(true);

    const classes = useStyles();
    const original = `./eqSongs/${songs[songIndex]}.mp3`;
    const modified = `./eqSongs/${songs[songIndex]}${eqSettings[eqIndex].fileEnding}.mp3`;

    const nextSong = () => {
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

    const onClick = (id) =>{
        setAsked(asked+1);
        const wrong = id != eqIndex;
        setLabel(!wrong ? 'Good Job' : ' Try Again');
        if(wrong) return;
        setCorrect(correct+1);
        nextSong();

    };

    const giveUp = () => {
        setAsked(asked+1);
        setLabel(eqSettings[eqIndex].label);
        nextSong();
    };

    const onSetCheat = (e) =>setCheat(e.target.checked);

    const onCloseScore = () =>{
        setFinished(false);
    };

    useEffect(()=>{
        audioPlayerOriginal.current.volume = 0.1;
        if(eqIndex === 0) return;
        audioPlayerModified.current.volume = 0.1;
    },[]);

    return <div className={classes.root}>
        <h1>{questionCount}</h1>
        <h3>find the boosted freqency</h3>
        <h2>Original Piece</h2>
        <audio controls ref={audioPlayerOriginal}><source src={original} type="audio/mpeg"/></audio>
        <h2>modified Piece</h2>
        <audio controls ref={audioPlayerModified}><source src={modified} type="audio/mpeg"/></audio>
        <h2>
            <Button variant={'contained'} onClick={giveUp} className={classes.button}>Give Up</Button>
        </h2>
        <Checkbox checked={cheat} onClick={onSetCheat}/> Cheat
        <div className={classes.options}>
            {
                eqSettings.map((val, index)=><EqRange label={val.label} onClick={()=>onClick(index)} key={index} {...{cheat, songIndex, eqIndex: index}}/>)
            }
        </div>
        <h1>{label}</h1>
        <ScoreArea {...{correct, asked}}/>
        {/*<ScoreDialog {...score} open={finished} onClose={onCloseScore}/>*/}
        <EqInfo/>
    </div>
}

export default Eq

import {Button} from "@mui/material";
import {useStyles} from "./eq.css.js";
import {useAudio} from "../../hooks/useAudio.js";
import songs from "./songs.json";
import eqSettings from "./files.json";
import {useEffect} from "react";

function EqRange({cheat, label ,onClick, songIndex, eqIndex, filePlaying, setFilePlaying}) {
    const file = `./eqSongs/${songs[songIndex]}${eqSettings[eqIndex].fileEnding}.mp3`;
    const [play, audio] = useAudio(file);
    const classes = useStyles();

    useEffect(()=>{
        audio.stop();
    },[cheat, songIndex, eqIndex]);

    useEffect(()=>{
        if(filePlaying === eqIndex) return;
        audio.stop();
    },[filePlaying]);

    useEffect(()=>{
        const url = `./eqSongs/${songs[songIndex]}${eqSettings[eqIndex].fileEnding}.mp3`;
        audio.change(url);
    },[songIndex]);

    const PlayFile = () => {
        play();
        setFilePlaying(eqIndex);
    }

    return (<Button variant={'outlined'} onClick={cheat ? PlayFile : onClick} className={classes.button}>{label}</Button>);
}
export default EqRange;

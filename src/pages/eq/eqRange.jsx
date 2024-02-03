import {Button} from "@mui/material";
import {useStyles} from "./eq.css.js";
import {useAudio} from "../../hooks/useAudio.js";
import songs from "./songs.json";
import eqSettings from "./files.json";
import {useEffect} from "react";

function EqRange({cheat, label ,onClick, songIndex, eqIndex}) {
    const file = `./eqSongs/${songs[songIndex]}${eqSettings[eqIndex].fileEnding}.mp3`;
    const [play, stop] = useAudio(file);
    const classes = useStyles();
    useEffect(()=>{
        stop();
    },[cheat, songIndex, eqIndex]);
    return (<Button variant={'outlined'} onClick={cheat ? play : onClick} className={classes.button}>{label}</Button>);
}
export default EqRange;

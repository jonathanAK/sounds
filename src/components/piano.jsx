import {useStyles} from "./piano.css.js";
import {makeSound} from "../services/midi.js";
const Piano = ({octave= 4,callback,mute=false}) => {
    const classes = useStyles();
    const onclick = (note)=>{
        if(!mute){
            makeSound({note:note[0], octave});
        }
        if(!callback) return;
        callback(note);
    }

    return <div className={classes.box}>
        <div className={classes.c}  onClick={()=>onclick(['C','B#'])}/>
        <div className={classes.cs} onClick={()=>onclick(['C#','Db'])}/>
        <div className={classes.d}  onClick={()=>onclick(['D'])}/>
        <div className={classes.ds} onClick={()=>onclick(['D#','Eb'])}/>
        <div className={classes.e}  onClick={()=>onclick(['E','Fb'])}/>
        <div className={classes.f}  onClick={()=>onclick(['F','E#'])}/>
        <div className={classes.fs} onClick={()=>onclick(['F#','Gb'])}/>
        <div className={classes.g}  onClick={()=>onclick(['G'])}/>
        <div className={classes.gs} onClick={()=>onclick(['G#','Ab'])}/>
        <div className={classes.a}  onClick={()=>onclick(['A'])}/>
        <div className={classes.as} onClick={()=>onclick(['A#','Bb'])}/>
        <div className={classes.b}  onClick={()=>onclick(['B','Cb'])}/>
    </div>;
};

export default Piano;
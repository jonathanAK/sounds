import {useStyles} from "./piano.css.js";
import {makeSound} from "../services/midi.js";
const Piano = ({octave=4,callback}) => {
    const classes = useStyles();
    const onclick = (note)=>{
        makeSound({note, octave});
        if(!callback) return;
        callback(note);
    }

    return <div className={classes.box}>
        <div className={classes.c}  onClick={()=>onclick('C')}/>
        <div className={classes.cs} onClick={()=>onclick('C#')}/>
        <div className={classes.d}  onClick={()=>onclick('D')}/>
        <div className={classes.ds} onClick={()=>onclick('D#')}/>
        <div className={classes.e}  onClick={()=>onclick('E')}/>
        <div className={classes.f}  onClick={()=>onclick('F')}/>
        <div className={classes.fs} onClick={()=>onclick('F#')}/>
        <div className={classes.g}  onClick={()=>onclick('G')}/>
        <div className={classes.gs} onClick={()=>onclick('G#')}/>
        <div className={classes.a}  onClick={()=>onclick('A')}/>
        <div className={classes.as} onClick={()=>onclick('A#')}/>
        <div className={classes.b}  onClick={()=>onclick('B')}/>

    </div>;
};

export default Piano;
import Button from '@mui/material/Button';
import {FormControl, InputLabel, MenuItem, Select, Switch} from "@mui/material";
import scales from '../../services/scales.json';
import {useEffect, useRef} from "react";
import {useStyles} from "./ResolvingNotes.css.js";
import {saveSettings} from "../../services/localHost.js";

function ResolvingNotesSettings({
                                startNewGame,
                                scale,
                                setScale,
                                playableDegrees,
                                setPlayableDegrees,
                                octave,
                                setOctave,
                                noRepeat,
                                setNoRepeat,
                                soundsLoaded
                            }) {
    const initialRender = useRef(true);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current= false;
        } else {
            setPlayableDegrees([1, 3, 5]);
        }
    }, [scale]);

    useEffect(()=>{
        saveSettings({resolvingNotes:{
                scale,
                octave,
                noRepeat
        }})
    },[scale, octave, noRepeat, playableDegrees])
    const classes = useStyles();
    return (
        <div>
            <div className={classes.noteArea}>
                <FormControl className={classes.selectFromControl} size="small">
                    <InputLabel id="scale">Scale</InputLabel>
                    <Select
                        labelId="scale"
                        id="scale"
                        value={scale}
                        label="scale"
                        onChange={(e) => setScale(e.target.value)}
                    >
                        {
                            Object.keys(scales).map((key) => <MenuItem value={key} key={key}>{key}</MenuItem>)
                        }
                    </Select>
                </FormControl>
                <span>
                    <div><h4 className={classes.repeatText}>no Repeat</h4></div>
                    <Switch
                        checked={noRepeat}
                        onChange={(e)=>setNoRepeat(e.target.checked)}
                    />
                </span>
                <FormControl className={classes.selectFromControl} size="small">
                    <InputLabel id="Octave">Octave</InputLabel>
                    <Select
                        labelId="octave"
                        id="octave"
                        value={octave}
                        label="octave"
                        onChange={(e) => setOctave(e.target.value)}
                    >
                        <MenuItem value={-1}>Random</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <Button onClick={startNewGame} disabled={!soundsLoaded} variant="outlined" className={classes.startButton}>{!!soundsLoaded ? 'Start' : 'Loading'}</Button>
        </div>
    )
}

export default ResolvingNotesSettings;

import Button from '@mui/material/Button';
import {FormControl, InputLabel, MenuItem, Select, Switch} from "@mui/material";
import scales from '../../../../services/scales.json';
import {useEffect} from "react";
import {useStyles} from "../../singleNote.css.js";

const NoteSwitch = ({note, setNotes, selectedNotes, degree}) => {
    const noteOn = selectedNotes.includes(degree);
    const onChange = () => {
        if (!noteOn) return setNotes([...selectedNotes, degree]);
        setNotes(selectedNotes.filter(specificDegree => specificDegree !== degree))
    }
    return <span>
        <div><h4>{note}</h4></div>
        <Switch
            checked={noteOn}
            onChange={onChange}
        />
    </span>
}

function SingleNoteSettings({
                                startNewGame,
                                scale,
                                setScale,
                                playableDegrees,
                                setPlayableDegrees,
                                octave,
                                setOctave,
                                noRepeat,
                                setNoRepeat
                            }) {
    useEffect(() => {
        setPlayableDegrees([1, 3, 5])
    }, [scale]);
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
            <div className={classes.noteArea}>
                {scales[scale].map((note, key) => <NoteSwitch key={note}
                                                              note={note} degree={key + 1} setNotes={setPlayableDegrees}
                                                              selectedNotes={playableDegrees}/>)}
            </div>
            <Button onClick={startNewGame} variant="outlined" className={classes.startButton}>Start</Button>
        </div>
    )
}

export default SingleNoteSettings;

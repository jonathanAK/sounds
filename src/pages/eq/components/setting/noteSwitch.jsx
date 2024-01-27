import { Switch} from "@mui/material";

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

export default NoteSwitch;

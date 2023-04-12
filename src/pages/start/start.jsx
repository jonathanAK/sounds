import {startSound} from "../../services/midi.js";
import {Button} from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import {initMidi} from "../../services/midiController.js";


function StartPage({setCurrentPage, setSoundsLoaded}) {
    const startSingleNote =()=>{
        initMidi();
        startSound({onLoaded:()=>setSoundsLoaded(true)});
        setCurrentPage('singleNote');
    };

    return <div>
        Welcome To Ear training
        <br/>
        Select Game To Start
        <br/>
        <br/>
        <br/>
        <Button onClick={startSingleNote} variant={"outlined"}>
            <MusicNoteIcon/>
            single Note
        </Button>
    </div>
}

export default StartPage;

import {startSound} from "../../services/midi.js";
import {Button} from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {initMidi} from "../../services/midiController.js";


function StartPage({setCurrentPage, setSoundsLoaded}) {
    const initSounds = ()=>{
        initMidi();
        startSound({onLoaded:()=>setSoundsLoaded(true)});
    };

    const startGame =(game)=>{
        initSounds();
        setCurrentPage(game);
    };

    return <div>
        Welcome To Ear training
        <br/>
        Select Game To Start
        <br/>
        <br/>
        <Button onClick={()=>startGame('singleNote')} variant={"outlined"}>
            <MusicNoteIcon/>
            single Note
        </Button>
        <br/><br/>
        <Button onClick={()=>startGame('resolvingNotes')} variant={"outlined"}>
            <TrendingUpIcon/>
            Resolving Notes
        </Button>
    </div>
}

export default StartPage;

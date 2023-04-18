import {startSound} from "../../services/midi.js";
import {Button} from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {initMidi} from "../../services/midiController.js";
import {useStyles} from "./start.css.js";


function StartPage({setCurrentPage, setSoundsLoaded}) {
    const classes = useStyles();
    const initSounds = () => {
        initMidi();
        startSound({onLoaded: () => setSoundsLoaded(true)});
    };

    const startGame = (game) => {
        initSounds();
        setCurrentPage(game);
    };

    return <div className={classes.startPage}>
        <h2>Welcome To Ear training</h2>
        <h3>Select Game To Start</h3>
        <br/>
        <Button onClick={() => startGame('singleNote')} variant={"outlined"}>
            <div className={classes.gameButton}>
                <MusicNoteIcon/>
                single Note
            </div>
        </Button>
        <br/><br/>
        <Button onClick={() => startGame('resolvingNotes')} variant={"outlined"}>
            <div className={classes.gameButton}>
                <TrendingUpIcon/>
                Resolving Notes
            </div>
        </Button>

        <div className={classes.attribute}>
            <h4>*The instrument samples in this app come from a variety of
                <a href={'./public/samples.txt'} target="_blank"> sources.</a>
            </h4>
            <h4>Licenses:</h4>
            <a href={'https://creativecommons.org/licenses/by/3.0/'} target="_blank">CC-by 3.0</a>
            <br/>
            <a href={'https://creativecommons.org/licenses/by-nc-sa/4.0/'} target="_blank">CC BY-NC-SA 4.0</a>
        </div>
    </div>
}

export default StartPage;

import {useState} from "react";
import SingleNoteSettings from "./singleNoteSettings.jsx";
import SingleNoteGame from "./singleNoteGame.jsx";
import {startSound} from "../../services/midi.js";

function SingleNote() {
    const [showSettings, setShowSettings] = useState(true);
    const [scale, setScale] = useState('C');
    const [playableDegrees, setPlayableDegrees] = useState([1,3,5]);
    const [correct, setCorrect] =useState(0);
    const [asked, setAsked] = useState(0);
    const [startTime, setStartTime] =useState(0);
    const [octave, setOctave] =useState(4);


    const increaseQuestionCount = ()=> setAsked(asked+1);
    const increaseCorrectCount = ()=> setCorrect(correct+1);
    const startNewGame = ()=>{
        startSound();
        setShowSettings(false);
        setCorrect(0);
        setAsked(0);
        setStartTime(Date.now());
    }


    return showSettings ?
        <SingleNoteSettings
            {...{
                startNewGame,
                scale, setScale,
                playableDegrees, setPlayableDegrees,
                octave, setOctave,
            }}
        /> :
        <SingleNoteGame
            {...{
                scale,
                playableDegrees,
                increaseCorrectCount,
                increaseQuestionCount,
            }}
            selectedOctave={octave}
        />;
}

export default SingleNote

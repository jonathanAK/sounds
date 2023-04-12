import {useState} from "react";
import SingleNoteSettings from "./components/setting/singleNoteSettings.jsx";
import SingleNoteGame from "./components/game/singleNoteGame.jsx";
import {startSound} from "../../services/midi.js";

function SingleNote({setCurrentPage, soundsLoaded}) {
    const settings = window.globals.settings.singleNote || {};
    const [showSettings, setShowSettings] = useState(true);
    const [scale, setScale] = useState(settings.scale || 'C');
    const [playableDegrees, setPlayableDegrees] = useState( settings.playableDegrees || [1,3,5]);
    const [correct, setCorrect] =useState(0);
    const [asked, setAsked] = useState(0);
    const [octave, setOctave] = useState(settings.octave || 4);
    const [noRepeat, setNoRepeat] = useState(settings.noRepeat || false);


    const increaseQuestionCount = ()=> setAsked(asked+1);
    const increaseCorrectCount = ()=> setCorrect(correct+1);

    const startNewGame = ()=>{
        startSound({key:scale,octave});
        setShowSettings(false);
        setCorrect(0);
        setAsked(0);
    }


    return showSettings ?
        <SingleNoteSettings
            {...{
                startNewGame,
                scale, setScale,
                playableDegrees, setPlayableDegrees,
                noRepeat, setNoRepeat,
                octave, setOctave,
                soundsLoaded
            }}
        /> :
        <SingleNoteGame
            {...{
                scale,
                playableDegrees,
                noRepeat,
                setShowSettings,
                increaseCorrectCount,
                increaseQuestionCount,
                asked, correct
            }}
            selectedOctave={octave}
        />;
}

export default SingleNote

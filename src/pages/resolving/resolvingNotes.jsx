import {useState} from "react";
import ResolvingNotesSettings from "./resolvingNotesSettings.jsx";
import ResolvingNotesGame from "./resolvingNotesGame.jsx";
import {startSound} from "../../services/midi.js";

function ResolvingNotes({setCurrentPage, soundsLoaded}) {
    const settings = window.globals.settings.resolvingNotes || {};
    const [showSettings, setShowSettings] = useState(true);
    const [scale, setScale] = useState(settings.scale || 'C');
    const [correct, setCorrect] = useState(0);
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
        <ResolvingNotesSettings
            {...{
                startNewGame,
                scale, setScale,
                noRepeat, setNoRepeat,
                octave, setOctave,
                soundsLoaded
            }}
        /> :
        <ResolvingNotesGame
            {...{
                scale,
                noRepeat,
                setShowSettings,
                increaseCorrectCount,
                increaseQuestionCount,
                asked, correct
            }}
            selectedOctave={octave}
        />;
}

export default ResolvingNotes

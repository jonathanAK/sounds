import notes from "./noteOrder.json";

let midi;

const onMIDImessage = (onKeydown) => (messageData) => {
    if (messageData.data[0] !== 144) return;
    const note = notes[(messageData.data[1] - 12) % 12];
    onKeydown(note);
};

const registerToMidi = (onKeyDown) =>{
    if(!midi.inputs.size) return console.warn("Not finding a MIDI controller");
    const allInputs = midi.inputs.values();
    for (let input = allInputs.next(); input && !input.done; input = allInputs.next()) {
        input.value.onmidimessage = onMIDImessage(onKeyDown);
    }
}

const onMIDISuccess = (midiData) => {
    if(!midiData.inputs.size) return console.warn("Not finding a MIDI controller");
    midi = midiData;
    console.log('MIDI Success', midiData);
    registerToMidi(console.log); //TODO: move to game start
};

export const initMidi = async () => {
    try{
        const midiData = await navigator.requestMIDIAccess({sysex: false});
        onMIDISuccess(midiData);
    }catch (e) {
        console.warn("Not finding a MIDI controller");
    }
};

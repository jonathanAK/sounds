import notes from "./noteOrder.json";

let midi;

const onMIDImessage = (onKeydown) => (messageData) => {
    if (messageData.data[0] !== 144) return;
    const note = notes[(messageData.data[1] - 12) % 12];
    onKeydown(note);
};

export const registerToMidi = (onKeyDown) =>{
    if(!onKeyDown) return;
    if(!midi.inputs.size) return console.warn("Not finding a MIDI controller");
    const allInputs = midi.inputs.values();
    for (let input = allInputs.next(); input && !input.done; input = allInputs.next()) {
        input.value.onmidimessage = onMIDImessage(onKeyDown);
    }
}

export const unregisterToMidi = () =>{
    const allInputs = midi.inputs.values();
    for (let input = allInputs.next(); input && !input.done; input = allInputs.next()) {
        delete input.value.onmidimessage;
    }
}


const onMIDISuccess = (midiData) => {
    console.log(midiData);
    if(!midiData.inputs.size) return console.warn("Not finding a MIDI controller");
    midi = midiData;
    console.log('MIDI Success', midiData);
};

export const initMidi = async () => {
    try{
        const midiData = await navigator.requestMIDIAccess({sysex: false});
        onMIDISuccess(midiData);
    }catch (e) {
        console.warn("Not finding a MIDI controller");
    }
};

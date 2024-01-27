import notes from "./noteOrder.json";

let midi;

const onMIDImessage = (onKeydown) => (messageData) => {
    const data = messageData.data;
    if (data[0] === 176 && data[2] ===127) return onKeydown('pedal');
    if (data[0] !== 144) return;
    const note = notes[(data[1] - 12) % 12];
    onKeydown(note);
};

export const registerToMidi = (onKeyDown) =>{
    if(!midi || !onKeyDown) return;
    if(!midi.inputs.size) return console.warn("Not finding a MIDI controller");
    const allInputs = midi.inputs.values();
    for (let input = allInputs.next(); input && !input.done; input = allInputs.next()) {
        input.value.onmidimessage = onMIDImessage(onKeyDown);
    }
}

export const unregisterToMidi = () =>{
    if(!midi) return;
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

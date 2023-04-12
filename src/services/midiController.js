import notes from "./noteOrder.json";

let midi;

const onMIDImessage = (onKeydown) => (messageData) => {
    if (messageData.data[0] !== 144) return;
    const note = notes[(messageData.data[1] - 12) % 12];
    onKeydown(note);
};

const onMIDISuccess = (midiData) => {
    console.log('MIDI Success', midiData);
    const allInputs = midiData.inputs.values();
    for (let input = allInputs.next(); input && !input.done; input = allInputs.next()) {
        input.value.onmidimessage = onMIDImessage(console.log);
    }
};
const onMIDIFailure = () => console.warn("Not finding a MIDI controller");


if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess({
        sysex: false
    }).then(onMIDISuccess, onMIDIFailure);
} else {
    console.warn("No MIDI support in your browser");
}

const notes = [
    ['C', 'B#'],
    ['C#', 'Db'],
    ['D'],
    ['D#', 'Eb'],
    ['E', 'Fb'],
    ['F', 'E#'],
    ['F#', 'Gb'],
    ['G'],
    ['G#', 'Ab'],
    ['A'],
    ['A#','Bb'],
    ['B','Cb']
];

let midi;

const onMIDIFailure = () => console.warn("Not finding a MIDI controller");
const onMIDImessage = (messageData) => {
    if (messageData.data[0] !== 144) return;
    const note = notes[(messageData.data[1] - 24) % 12];
    console.log('key pressed', note);
};

if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess({
        sysex: false
    }).then(onMIDISuccess, onMIDIFailure);
} else {
    console.warn("No MIDI support in your browser");
}

function onMIDISuccess(midiData) {
    console.log('onMIDISuccess', midiData);
    midi = midiData;
    var allInputs = midi.inputs.values();
    for (var input = allInputs.next(); input && !input.done; input = allInputs.next()) {
        input.value.onmidimessage = onMIDImessage;
    }
}


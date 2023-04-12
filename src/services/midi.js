import * as Tone from 'tone';
import scales from './scales.json';
import samples from './sample.json';

const sampleUrls = Object.keys(samples.noteMapping).reduce((obj, key) => ({
    ...obj,
    [key]: samples.baseUrl + samples.noteMapping[key]
}), {})
new Tone.Buffers(sampleUrls, () => console.log('buffers loaded'))
Tone.context.lookAhead = 0;
let synth, polySynth;
let lastPlay = 0;

const minMaxNum = (min, max, num) => Math.max(min, Math.min(max, Math.floor(num)));

export const startSound = ({onLoaded= ()=>false}) => {
    synth = new Tone.Sampler({
        urls: samples.noteMapping,
        baseUrl: samples.baseUrl,
        onload: async () => {
            await Tone.start();
            polySynth = new Tone.PolySynth().toDestination();
            onLoaded();
        }
    }).toDestination();
}

const getMajorChord = ({key, chordNum, octave}) => {
    const note1 = scales[key][(chordNum - 1) % 7] + octave;
    const note2 = scales[key][(chordNum + 1) % 7] + ((chordNum + 1) < 8 ? octave : (octave + 1));
    const note3 = scales[key][(chordNum + 3) % 7] + ((chordNum + 3) < 8 ? octave : (octave + 1));
    return [note1, note2, note3];
}

export const makeSound = ({note = 'C', octave = 4}) => {
    try {
        if (!synth) startSound({});
        const startTime = Tone.now();
        if (!startTime > lastPlay) return;
        lastPlay = startTime;
        synth.triggerAttackRelease(note + octave, "4n");
    } catch (e) {
        console.error(e);
    }
}

export const playScale = ({key, octave = 4}) => {
    try {
        const startTime = Tone.now();
        synth.triggerAttackRelease(getMajorChord({chordNum: 1, key, octave}), 1, startTime);
        synth.triggerAttackRelease(getMajorChord({chordNum: 4, key, octave}), 1, startTime + 1);
        synth.triggerAttackRelease(getMajorChord({chordNum: 5, key, octave}), 1, startTime + 2);
        synth.triggerAttackRelease(getMajorChord({chordNum: 1, key, octave}), 1, startTime + 3);
    } catch (e) {
        console.error(e);
    }
}

export const playNoteOnScale = ({scale = 'C', degree = 0, octave = 4}) => {
    const note = scales[scale][minMaxNum(0, 6, degree - 1)];
    if (!note) return;
    makeSound({note, octave});
}
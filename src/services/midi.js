import * as Tone from 'tone';
import scales from './scales.json';
import samples from './sample.json';

const sampleUrls =  Object.keys(samples.noteMapping).reduce((obj,key)=>({...obj,[key]:samples.baseUrl+samples.noteMapping[key]}),{})
new Tone.Buffers (sampleUrls , ()=>console.log('sounds loaded') )
Tone.context.lookAhead=0;
let synth, polySynth, piano;
let lastPlay = 0;

const minMaxNum = (min,max,num)=> Math.max(min,Math.min(max,Math.floor(num)));

export const startSound = ({droneVolume=0,key='C',octave=4}) => {
    Tone.start();
    // synth = new Tone.Synth({}).toDestination();
    synth = new Tone.Sampler({
        urls: samples.noteMapping,
        baseUrl: samples.baseUrl,
    }).toDestination();
    polySynth = new Tone.PolySynth().toDestination();
    playdrone({key,octave});
}

export const makeSound = ({note = 'C', octave = 4}) => {
    try {
        if(!synth) startSound();
        const startTime = Tone.now()
        if (!startTime > lastPlay) return;
        lastPlay = startTime;
        synth.triggerAttackRelease(note + octave, "8n");
    } catch (e) {
        console.error(e);
    }
}

export const playdrone = ({key, octave = 4}) => {
    try {
        const notes = [scales[key][0] + octave,scales[key][1] + octave,scales[key][2] + octave]
        polySynth.triggerAttackRelease(notes,1);
    } catch (e) {
        console.error(e);
    }
}

export const playNoteOnScale = ({scale='C', degree=0, octave=4}) => {
    const note = scales[scale][minMaxNum(0,6,degree-1)];
    if(!note) return;
    makeSound({note,octave});
}
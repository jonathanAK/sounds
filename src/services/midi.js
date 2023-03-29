import * as Tone from 'tone';
import scales from './scales.json';

const synth = new Tone.Synth().toDestination();
let lastPlay = 0;

const minMaxNum = (min,max,num)=> Math.max(min,Math.min(max,Math.floor(num)));

export const makeSound = ({note = 'C', octave = 4}) => {
    try {
        const startTime = Tone.now()
        if (!startTime > lastPlay) return;
        lastPlay = startTime;
        Tone.start();
        synth.triggerAttackRelease(note + octave, "8n", startTime+2);
    } catch (e) {
        console.error(e);
    }
}

export const playNoteOnScale = ({scale='C', degree=0, pitch=4}) => {
    const note = scales[scale][minMaxNum(0,6,degree-1)];
    if(!note) return;
    makeSound({note,octave:pitch});
}
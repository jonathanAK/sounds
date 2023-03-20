import * as Tone from 'tone'

const synth = new Tone.Synth().toDestination();
let lastPlay = 0;

const tones = [
    'C',
    'D',
    'E',
    'F',
    'G',
    'A',
    'B'
]

export const makeSound = ({note = 'C', set = 4}) => {
    try {
        const startTime = Tone.now()
        if (!startTime > lastPlay) return;
        lastPlay = startTime;
        Tone.start();
        synth.triggerAttackRelease(note + set, "8n", startTime);
    } catch (e) {
        console.error(e);
    }
}

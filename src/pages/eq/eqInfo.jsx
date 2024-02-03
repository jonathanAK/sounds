import {useStyles} from "./eq.css.js";

function EqInfo() {
    const classes = useStyles();
    return <>
        <div>
            <h4 className={classes.titles}>SUB BASS 0-60 Hz</h4>
            <span>Most sounds in this frequency range more felt than heard. too much sub bass can make your mix sound muddy.</span>
        </div>
        <div>
            <h4 className={classes.titles}>BOTTOM 60-100 Hz</h4>
            <span>This is where the bottom or “chest punch” of the bass and kick drum lies. Boost if more energy is needed.</span>
        </div>
        <div>
            <h4 className={classes.titles}>WARMTH 130-220 Hz</h4>
            <span>Boost 130-220 Hz to add warmth and fullness.</span>
        </div>
        <div>
            <h4 className={classes.titles}>MUD 250-450 Hz</h4>
            <span>Check 250-450 Hz range for mud, boost to bring fullness</span>
        </div>
        <div>
            <h4 className={classes.titles}>HONK 450 – 1000 Hz</h4>
            <span>You may eliminate many of the harsh, “honky” and boxy characteristics of the tone with a centered, wide cut in the 450-1 kHz range. By making cuts on some instruments you can bring more clarity to the bass within the overall mix.</span>
        </div>
        <div>
            <h4 className={classes.titles}>TINNY 1 – 2 kHz</h4>
            <span>Too much in the 1-2 kHz range make things sound tinny or horn-like. </span>
        </div>
        <div>
            <h4 className={classes.titles}>CRUNCH 2 – 4 kHz</h4>
            <span>This is where you’ll find the attack tones of percussive and rhythm instruments.</span>
        </div>
        <div>
            <h4 className={classes.titles}>PRESENCE 4 – 6 kHz</h4>
            <span>Boosts here can add edge to electric guitars and drums.</span>
        </div>
        <div>
            <h4 className={classes.titles}>DEFINITION 6 – 10 kHz</h4>
            <span>Boosts in this range adds more definition to vocal and guitar tracks. Too much boost around the 5-8 kHz range tend to sound sibilant.</span>
        </div>
        <div>
            <h4 className={classes.titles}>AIR 10 – 20 kHz</h4>
            <span>Boosting this range can add extra air and sparkle to your instrument or overall mix.can create an extremely shrill tone and hiss noises.</span>
        </div>
        <h3><a href={'https://abletunes.com/blog/eq-cheat-sheet/'} target={'_blank'}>full frequency range cheat sheet</a></h3>
    </>
}

export default EqInfo

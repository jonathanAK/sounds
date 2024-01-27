import {useState} from "react";
import {useStyles} from "./eq.css.js";
const songs = [];
const eqSettings = [
    {
        fileEnding: '15000',
        label: '15Kh'
    }
]
function Eq() {
    const [songIndex, setSongIndex] = useState(Math.floor(Math.random()*songs.length));
    const [eqIndex, setEqIndex] = useState(Math.floor(Math.random()*eqSettings.length));
    const classes = useStyles();
    return <div></div>
}

export default Eq

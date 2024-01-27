import {useAudio} from "../../hooks/useAudio.js";
import {useStyles} from "./rhythmicPatterns.css.js";

const Pattern = ({id, playbackRate= 1, click}) => {
  const [play] = useAudio(`./patterns/${id}.mp3`, { playbackRate });
  const [playClick] = useAudio(`./patterns/${id}c.mp3`, { playbackRate });
  const classes = useStyles();

  return (
      <img src={`./patterns/${id}.png`} onClick={click? playClick : play} className={classes.button} alt={''+id}/>
  )
}

export default Pattern

import Pattern from "./pattern.jsx";
import {useState} from "react";
import {Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select} from "@mui/material";
import {useStyles} from "./rhythmicPatterns.css.js";

function RhythmicPatterns() {
  const [tempo, setTempo] = useState(100);
  const [click, setClick] = useState(false);
  const classes = useStyles();

  const handleChange = (e) => setTempo(e.target.value);
  const handleClickChange = (e) => setClick(!e.target.checked);
  const patternProps = {
      playbackRate:(tempo/100),
      click
  };

  return (
    <div className={classes.root}>
      <h1>Rhythmic Patterns</h1>
      <FormControl fullWidth sx={{marginBottom:5}}>
      <InputLabel >Tempo</InputLabel>
        <Select
            value={tempo}
            label="Tempo"
            onChange={handleChange}
        >
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={60}>60</MenuItem>
          <MenuItem value={80}>80</MenuItem>
          <MenuItem value={85}>85</MenuItem>
          <MenuItem value={90}>90</MenuItem>
          <MenuItem value={95}>95</MenuItem>
          <MenuItem value={100}>100</MenuItem>
          <MenuItem value={105}>105</MenuItem>
          <MenuItem value={110}>110</MenuItem>
          <MenuItem value={115}>115</MenuItem>
          <MenuItem value={120}>120</MenuItem>
          <MenuItem value={140}>140</MenuItem>
          <MenuItem value={160}>160</MenuItem>
        </Select>
      </FormControl>
      <FormControlLabel control={<Checkbox checked={!click} onChange={handleClickChange}/>} label="Stop Click When Rhythm Starts" />
      <Pattern id={'6'} {...patternProps}/>
      <Pattern id={'1'} {...patternProps}/>
      <Pattern id={'2'} {...patternProps}/>
      <Pattern id={'3'} {...patternProps}/>
      <Pattern id={'4'} {...patternProps}/>
      <h3>Rests</h3>
      <Pattern id={'7'} {...patternProps}/>
      <Pattern id={'10'} {...patternProps}/>
      <Pattern id={'5'} {...patternProps}/>
      <Pattern id={'11'} {...patternProps}/>
      <Pattern id={'8b'} {...patternProps}/>
      <h3>Dot Notation</h3>
      <Pattern id={'8'} {...patternProps}/>
      <Pattern id={'9'} {...patternProps}/>
      <Pattern id={'12'} {...patternProps}/>
      <Pattern id={'13'} {...patternProps}/>
      <h3>16th</h3>
      <Pattern id={'14'} {...patternProps}/>
      <Pattern id={'15'} {...patternProps}/>
      <Pattern id={'16'} {...patternProps}/>
      <Pattern id={'17'} {...patternProps}/>
        <h3>16th rests</h3>
        <Pattern id={'19'} {...patternProps}/>
        <Pattern id={'18'} {...patternProps}/>
        <Pattern id={'20'} {...patternProps}/>
        <Pattern id={'21'} {...patternProps}/>
    </div>
  )
}

export default RhythmicPatterns;

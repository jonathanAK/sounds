import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import scales from "../../../../services/scales.json";

const ScoreDialog = ({open, onClose, correct, time, asked, difficulty, scale, specificGrade}) => {
    if(!open)return <></>;
    const correctRate = Math.round((correct*100) / asked);
    const correctTime = Math.round(time/correct);
    const score = Math.round(correctRate*difficulty / correctTime);
    const percentByNote = {};
    specificGrade.map(([correct,wrong],keyNum)=>{
       percentByNote[scales[scale][keyNum]] = (correct / (wrong+correct)) || 1;
    });
    console.log(percentByNote);
    return(
        <Dialog onClose={onClose} open={open}>
            <h1>Correct Rate: {correctRate}%</h1>
            <h1>Correct Response Time: {correctTime} seconds</h1>
            <h1>Score: {score}</h1>
            <Button onClick={onClose} variant="contained">close</Button>
        </Dialog>
    );
};

export default ScoreDialog;

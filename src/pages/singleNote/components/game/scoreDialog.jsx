import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import scales from "../../../../services/scales.json";
import SuccessChart from "../../../../components/successChart.jsx";
import {DialogContent} from "@mui/material";

const ScoreDialog = ({open, onClose, correct, time, asked, difficulty, scale, specificGrade}) => {

    if (!open) return <></>;
    const correctRate = Math.round((correct * 100) / asked);
    const correctTime = Math.round(time / correct);
    const score = Math.round(correctRate * difficulty / correctTime);
    const percentByNote = {};
    specificGrade.map(([correct, wrong], keyNum) => {
        percentByNote[scales[scale][keyNum]] = (correct / (wrong + correct)) || 1;
    });
    return (
        <Dialog onClose={onClose} open={open}>
            <DialogContent sx={{overflow: "hidden"}}>
                {!!asked && <h2>Correct Rate: {correctRate}%</h2>}
                {!!correct && <h2>Correct Response Time: {correctTime} seconds</h2>}
                {!!score && <h2>Score: {score}</h2>}
                <SuccessChart percentByNote={percentByNote}/>
                <Button onClick={onClose} variant="contained" sx={{width:'100%'}}>close</Button>
            </DialogContent>
        </Dialog>
    );
};

export default ScoreDialog;

import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";

const ScoreDialog = ({open, onClose, correct, time, asked, difficulty}) => {
    const correctRate = Math.round((correct*100) / asked);
    const correctTime = Math.round(time/correct);
    const score = Math.round(3*correctRate*difficulty / correctTime);
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
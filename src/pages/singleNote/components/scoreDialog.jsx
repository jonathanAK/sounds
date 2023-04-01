import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";

function ScoreDialog({open, onClose, correct, time, asked}) {

    return (
        <Dialog onClose={onClose} open={open}>
        <Button onClick={onClose}>close</Button>
        </Dialog>
    )
}

export default ScoreDialog;

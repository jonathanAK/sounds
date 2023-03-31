import Button from '@mui/material/Button';

function ManualScore({checkAnswer}) {

    return (
        <>
            <Button variant="contained" color="success" onClick={() => checkAnswer(null, true)}>
                Success
            </Button>
            <Button variant="outlined" color="error" onClick={() => checkAnswer(null, false)}>
                wrong
            </Button>
        </>
    )
}

export default ManualScore;

import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
    gameControls: {
        height: 80,
        display: 'flex',
        width: 300,
        justifyContent: 'space-around',
        margin: 'auto',
    },
    repeatButton: {
        height: 30,
        margin: 30,
    },
    message: {
        height: 50,
        lineHeight: 1,
    },
    piano: {
        width: '90vw',
        maxWidth: 600,
        height: '45vw',
        maxHeight: 300,
    },
    scoreArea: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
    },
    scoreCorrect: {color: 'green'},
    scoreWrong: {color: 'red'},
    selectFromControl: {
        margin: 1,
        minWidth: 60,
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    startButton:{
        marginTop:10
    },
    noteArea:{
        display:'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    repeatText:{
        margin:0,
    }
})


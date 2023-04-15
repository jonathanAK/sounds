import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
    resolvingNotesGame:{
        display: 'flex',
        flexDirection: 'column',
    },
    controlsArea:{
        maxWidth: '80vw'
    },
    manualScoring: {
        height: 80,
        display: 'flex',
        width: '100%',
        marginTop: 25,
        justifyContent: 'space-evenly',
    },
    repeatButton: {
        height: 30,
        margin: 30,
    },
    message: {
        height: 50,
        lineHeight: 1,
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
    },
    answerArea:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        width: '90vw',
        maxWidth: 350,
    },
    button:{
        width: '100%',
        aspectRatio: '1 / 1',
    }
})


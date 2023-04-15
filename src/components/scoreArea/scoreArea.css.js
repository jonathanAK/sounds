import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
    scoreArea: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
    },
    scoreCorrect: {color: 'green'},
    scoreWrong: {color: 'red'},
})


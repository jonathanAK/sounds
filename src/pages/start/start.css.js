import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
    startPage:{
        //width: '100vw',
        //height: '100vh',
    },
    gameButton:{
        display: 'flex',
        alignContent: 'space-between',
        columnGap: 5,
    },
    attribute:{
        padding: 30,
    },
    mobileOnly:{
        "@media screen and (min-width: 600px)": {
            display: 'none'
        }
    }
})


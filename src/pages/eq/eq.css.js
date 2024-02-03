import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
    root:{
      maxWidth: '90vw',
    },
    options:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        width: '100%',
        marginRight: 'auto',
        marginLeft: 'auto',
        maxWidth: 'calc(80vw - 8px)',
        justifyContent: 'space-around',
        rowGap: 10,
        columnGap: 3,
        '& > :first-child':{
            fontSize: '0.7rem'
        }
    },
    titles:{
        marginBottom:0,
    },
    button:{
        // paddingLeft: 0,
        // paddingRight: 0,
    }
})


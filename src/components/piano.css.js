import {createUseStyles} from 'react-jss';

const key = {
    padding: 1,
    listStyle: 'none',
    position: 'relative',
    float: 'left',
    margin: '0 0 0 calc(-100%/30)',
};

const white = {
    ...key,
    height: '100%',
    width: 'calc(100%/8)',
    zIndex: 1,
    borderLeft: '1px solid #bbb',
    borderBottom: '1px solid #bbb',
    borderRadius: '0 0 5px 5px',
    boxShadow: '-1px 0 0 rgba(255,255,255,0.8) inset,0 0 5px #ccc inset,0 0 3px rgba(0,0,0,0.2)',
    background: 'linear-gradient(to bottom,#eee 0%,#fff 100%)',
    '&:active': {
        borderTop: '1px solid #777',
        borderLeft: '1px solid #999',
        borderBottom: '1px solid #999',
        boxShadow: '2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2)',
        background: 'linear-gradient(to bottom,#fff 0%,#e9e9e9 100%)',
    }
};

const black = {
    ...key,
    height: '50%',
    width: 'calc(100%/16)',
    zIndex: 2,
    border: '1px solid #000',
    borderRadius: '0 0 3px 3px',
    boxShadow: '-1px -1px 2px rgba(255,255,255,0.2) inset,0 -5px 2px 3px rgba(0,0,0,0.6) inset,0 2px 4px rgba(0,0,0,0.5)',
    background: 'linear-gradient(45deg,#222 0%,#555 100%)',
    '&:active': {
        boxShadow: '-1px -1px 2px rgba(255,255,255,0.2) inset,0 -2px 2px 3px rgba(0,0,0,0.6) inset,0 1px 2px rgba(0,0,0,0.5)',
        background: 'linear-gradient(to right,#444 0%,#222 100%)',
    }
}
export const useStyles = createUseStyles({
    box: {
        backgroundColor: '#FF9999',
        width: '100%',
        height: '100%',
        padding: 30,
        border: '1px solid #160801',
        borderRadius: '1em',
        background: 'linear-gradient(to bottom right,rgba(0,0,0,0.3),rgba(0,0,0,0)),url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/187/vwood.png)',
        boxShadow: '0 0 50px rgba(0,0,0,0.5) inset,0 1px rgba(212,152,125,0.2) inset,0 5px 15px rgba(0,0,0,0.5)'
    },
    c: {
        ...white,
        borderRadius: '5px 0 5px 5px',
        margin: '0 0 0 calc(100%/50)',
    },
    cs: {
        ...black,
    },
    d: {
        ...white,
    },
    ds: {
        ...black,
    },
    e: {
        ...white,
    },
    f: {
        ...white,
        margin: '0 0 0 1px',
    },
    fs: {
        ...black,
    },
    g: {
        ...white,
    },
    gs: {
        ...black,
    },
    a: {
        ...white,
    },
    as: {
        ...black,
    },
    b: {
        ...white,
        borderRadius: '0 5px 5px 5px',
    },
})
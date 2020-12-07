import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'unset',
        boxShadow: 'unset',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '15px',
        minWidth: '15rem',
    },
}));
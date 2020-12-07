import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        marginTop: '30px',
        marginBottom: '60px',
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
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: "column-reverse",
        }
    }
}));
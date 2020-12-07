import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#191919',
    borderStyle: 'dashed',
    borderColor: '#ff5757',
  },
  fieldset:{
    borderColor: 'red',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    opacity: '0%',
    width: '0.1px',
    height: '0.1px',
    position: 'absolute',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));

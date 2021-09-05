import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  form: {
    '& > *': {
      marginBottom: theme.spacing(3),
    },
  },
  btnWrapper: {
    display: 'flex',

    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  loginBtn: {
    marginRight: '5rem',
  },
  register: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}));

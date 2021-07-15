import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const StyledEditBox = styled.form``;

export const useStyles = makeStyles((theme) => ({
  inputsWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  buttonsWrapper: {
    marginTop: '5rem',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  discardBtn: {
    marginRight: '3rem',
  },
}));

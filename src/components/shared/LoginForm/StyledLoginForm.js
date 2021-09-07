import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const StyledError = styled.span`
  position: absolute;
  top: -5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.red};
`;

export const useStyles = makeStyles((theme) => ({
  form: {
    position: 'relative',
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

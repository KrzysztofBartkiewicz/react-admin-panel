import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const StyledErrorMsg = styled.span`
  margin-top: 0.5rem;
  display: block;
  color: ${({ theme }) => theme.colors.red};
`;

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    '& > *': {
      width: '100%',
    },
  },
}));

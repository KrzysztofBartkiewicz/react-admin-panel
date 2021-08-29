import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const StyledErrorMsg = styled.span``;

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    '& > *': {
      width: '100%',
    },
  },
}));

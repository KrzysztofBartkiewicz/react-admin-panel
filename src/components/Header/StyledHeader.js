import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

export const StyledHeader = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px;
  z-index: 50;

  & > * {
    margin-right: 3rem;
  }
`;

export const useStyles = makeStyles((theme) => ({
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

import styled, { css } from 'styled-components';
import emailIcons from '../../helpers/emailIcons';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ItemContainer from '../../components/ItemContainer';

export const StyledMailbox = styled.section`
  ${({ theme }) => theme.mixins.views}
`;

export const StyledAuthButtons = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

export const StyledMailboxWrapper = styled.div`
  display: flex;
`;

export const StyledMailContainer = styled.ul``;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  position: relative;

  span {
    display: block;

    ${({ theme }) => css`
      font-size: ${theme.fontSizes.l};
      font-weight: ${theme.fontWeights.bold};
    `}
  }
`;

export const StyledItemContainer = styled(ItemContainer)`
  padding: 0.5rem;
  display: block;
  height: fit-content;
  width: 100%;
`;

export const StyledFrom = styled.span`
  width: 28rem;
`;

export const StyledDate = styled.span`
  position: absolute;
  right: 0;
`;

export const StyledLink = styled(NavLink)``;

export const StyledNav = styled(ItemContainer)`
  min-width: 25rem;
  max-height: 30rem;
  margin-right: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const iconStyles = css`
  width: 3rem;
  height: 3rem;
`;

export const StyledMailIcon = styled(emailIcons.MailIcon)`
  ${iconStyles}
`;

export const StyledDraftIcon = styled(emailIcons.DraftIcon)`
  ${iconStyles}
`;

export const StyledTrashIcon = styled(emailIcons.TrashIcon)`
  ${iconStyles}
`;

export const StyledSentIcon = styled(emailIcons.SentIcon)`
  ${iconStyles}
`;

export const StyledPaginButtons = styled.div`
  display: flex;
`;

export const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

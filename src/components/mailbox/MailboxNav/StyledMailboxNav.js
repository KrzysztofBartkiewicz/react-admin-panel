import styled, { css } from 'styled-components';
import emailIcons from '../../../helpers/emailIcons';
import { makeStyles } from '@material-ui/core/styles';
import ItemContainer from '../../shared/ItemContainer';

export const StyledNav = styled(ItemContainer)`
  min-width: 25rem;
  max-height: 30rem;
  margin-right: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const iconStyles = css`
  width: 1.8rem;
  height: 1.8rem;
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

export const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

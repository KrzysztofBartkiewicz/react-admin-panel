import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import ItemContainer from '../../components/shared/ItemContainer';

export const StyledMailbox = styled.section`
  ${({ theme }) => theme.mixins.views}
`;

export const StyledAuthWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

export const StyledLoginInfo = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.l};
  margin-left: 3rem;

  span {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
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

    ${({ theme, unread }) => css`
      font-size: ${theme.fontSizes.l};
      font-weight: ${unread
        ? theme.fontWeights.bold
        : theme.fontWeights.regular};
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

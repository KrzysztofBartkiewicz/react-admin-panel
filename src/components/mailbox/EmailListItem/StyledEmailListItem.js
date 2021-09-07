import styled, { css } from 'styled-components';

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

export const StyledFrom = styled.span`
  width: 28rem;
`;

export const StyledDate = styled.span`
  position: absolute;
  right: 0;
`;

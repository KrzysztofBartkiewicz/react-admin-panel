import styled, { css } from 'styled-components';

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLogoText = styled.span`
  margin-left: 2.4rem;
  font-size: 2.2rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.white};

  ${({ big }) =>
    big &&
    css`
      font-size: 6rem;
    `}
`;

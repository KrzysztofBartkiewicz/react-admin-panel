import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'active-link';

export const StyledLeftBorder = styled.div`
  height: 100%;
  width: 4px;
  display: block;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  opacity: 0;
`;

export const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  display: flex;
  align-items: center;
  height: 3rem;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.64;

  svg {
    margin: 0 3.2rem 0 1.8rem;
    width: auto;
    height: 100%;
    fill: ${({ theme }) => theme.colors.white};
  }

  &.active-link {
    opacity: 1;
  }

  &.active-link ${StyledLeftBorder} {
    opacity: 1;
  }
`;

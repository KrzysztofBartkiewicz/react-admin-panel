import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  height: 100vh;
  min-width: 24rem;
  background-color: ${({ theme }) => theme.colors.blueMenu};
`;

export const StyledLogoWrapper = styled.div`
  padding: 4.9rem 0 0 2.7rem;
  margin-bottom: 13.4rem;
`;

export const StyledNavItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5.4rem;
  }
`;

export const StyledUserWrapper = styled.div``;

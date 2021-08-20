import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;

  & > * {
    margin-right: 3rem;
  }
`;

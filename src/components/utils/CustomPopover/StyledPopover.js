import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 2000;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const StyledPopover = styled.div`
  position: fixed;
  width: 10rem;
  height: 5rem;
  background-color: #fff;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);
`;

import styled, { css } from 'styled-components';

export const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const StyledPopover = styled.div`
  padding: 1rem;
  position: fixed;
  background-color: #fff;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);

  ${({ anchor }) =>
    anchor &&
    css`
      left: ${(anchor.left - anchor.width).toFixed(0)}px;
      top: ${(anchor.top + anchor.height).toFixed(0)}px;
    `}
`;

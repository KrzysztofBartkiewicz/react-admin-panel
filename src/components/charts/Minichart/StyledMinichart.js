import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  width: 100%;
  position: relative;
`;

export const StyledInner = styled.div`
  padding: 1rem;
  display: flex;
  align-items: flex-end;
`;

export const StyledBar = styled.div`
  width: 4px;
  margin: 1px;
  ${({ color, height }) => css`
    background-color: ${color};
    height: ${height}px;
  `}
`;

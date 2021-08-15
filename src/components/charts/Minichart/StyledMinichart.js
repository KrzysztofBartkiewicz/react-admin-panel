import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 1rem;
  margin-top: 10rem;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 1rem;
  width: fit-content;

  & > *:first-child {
    margin-bottom: 1rem;
    margin-right: 10rem;
  }
`;

export const StyledInner = styled.div`
  padding: 1rem;
  display: flex;
  align-items: flex-end;
`;

export const StyledBar = styled.div`
  width: 4px;
  margin: 1px;
  ${({ color, height, theme }) => css`
    background-color: ${color};
    height: ${height}px;
  `}
`;

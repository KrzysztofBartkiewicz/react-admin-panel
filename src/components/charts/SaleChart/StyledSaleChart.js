import styled, { css } from 'styled-components';

export const StyledSaleChart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ width, minHeight }) => css`
    width: ${width}px;
    min-height: ${minHeight}px;
  `}
`;

export const StyledTopWrapper = styled.div`
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledButtonWrapper = styled.div`
  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`;

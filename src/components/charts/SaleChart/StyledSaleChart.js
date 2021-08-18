import styled from 'styled-components';

export const StyledSaleChart = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StyledTopWrapper = styled.div`
  padding-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledButtonWrapper = styled.div`
  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`;

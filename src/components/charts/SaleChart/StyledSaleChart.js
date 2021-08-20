import styled from 'styled-components';
import ItemContainer from '../../ItemContainer';

export const StyledSaleChart = styled(ItemContainer)`
  position: relative;
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

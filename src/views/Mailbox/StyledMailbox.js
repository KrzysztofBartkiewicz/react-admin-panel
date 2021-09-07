import styled from 'styled-components';
import ItemContainer from '../../components/shared/ItemContainer';

export const StyledMailbox = styled.section`
  ${({ theme }) => theme.mixins.views}
`;

export const StyledAuthWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

export const StyledLoginInfo = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.l};
  margin-left: 3rem;

  span {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const StyledMailboxWrapper = styled.div`
  display: flex;
`;

export const StyledEmailContainer = styled(ItemContainer)`
  padding: 0.5rem;
  display: block;
  height: fit-content;
  width: 100%;
`;

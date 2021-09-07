import styled from 'styled-components';

export const StyledContainer = styled.div`
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

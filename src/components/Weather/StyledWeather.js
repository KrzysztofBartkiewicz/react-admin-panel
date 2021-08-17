import styled from 'styled-components';
import Heading from '../Heading';

export const StyledWeather = styled.div`
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  display: flex;
  flex-direction: column;
`;

export const StyledHeading = styled(Heading)`
  align-self: flex-start;
`;

export const StyledTopWrapper = styled.div`
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledCondition = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledCurrentWeather = styled.div`
  max-width: 18rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const StyledCurrentTemp = styled.span`
  font-size: 4rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const StyledCurrentDecs = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const StyledCurrentDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const StyledBottomWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledDailyForecast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

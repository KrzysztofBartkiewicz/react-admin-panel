import styled from 'styled-components';
import Minichart from '../../components/charts/Minichart';
import SaleChart from '../../components/charts/SaleChart';
import Heading from '../../components/Heading';
import Weather from '../../components/Weather';

export const StyledHome = styled.section`
  ${({ theme }) => theme.mixins.views};

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: min-content 11rem 11rem min-content;
  grid-gap: 3rem;
`;

export const StyledHeading = styled(Heading)`
  grid-column: -1 / span 12;
  grid-row: 1;
`;

export const StyledSaleChart = styled(SaleChart)`
  grid-column: span 6;
  grid-row: 2 / span 2;
`;

export const StyledOrdersChart = styled(Minichart)`
  grid-row: 2;
  grid-column: span 3;
`;

export const StyledUsersChart = styled(Minichart)`
  grid-row: 2;
  grid-column: span 3;
`;

export const StyledVisitsChart = styled(Minichart)`
  grid-row: 3;
  grid-column: span 3;
`;

export const StyledCommentsChart = styled(Minichart)`
  grid-row: 3;
  grid-column: span 3;
`;

export const StyledWeather = styled(Weather)`
  grid-row: 4;
  grid-column: span 7;
`;

import React from 'react';
import SaleChart from '../../components/charts/SaleChart';
import Minichart from '../../components/charts/Minichart';
import Heading from '../../components/Heading';
import Weather from '../../components/Weather';
import { StyledHome } from './StyledHome';
import mainTheme from '../../styles/themes/mainTheme';

const Home = () => {
  return (
    <StyledHome>
      <Heading headingType="h1">Home</Heading>
      <SaleChart width="80%" height="30%" />
      <Minichart color={mainTheme.colors.blueMenu} />
      <Weather />
    </StyledHome>
  );
};

export default Home;

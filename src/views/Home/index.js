import React from 'react';
import SaleChart from '../../components/charts/SaleChart';
import Minichart from '../../components/charts/Minichart';
import Heading from '../../components/Heading';
import { StyledHome } from './StyledHome';
import mainTheme from '../../styles/themes/mainTheme';

const Home = () => {
  return (
    <StyledHome>
      <Heading headingType="h1">Home</Heading>
      <SaleChart width="80%" height="30%" />
      <Minichart color={mainTheme.colors.blueMenu} />
    </StyledHome>
  );
};

export default Home;

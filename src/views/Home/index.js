import React from 'react';
import SaleChart from '../../components/charts/SaleChart';
import Heading from '../../components/Heading';
import { StyledHome } from './StyledHome';

const Home = () => {
  return (
    <StyledHome>
      <Heading headingType="h1">Home</Heading>
      <SaleChart width="80%" height="30%" />
    </StyledHome>
  );
};

export default Home;

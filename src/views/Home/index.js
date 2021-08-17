import React from 'react';
import SaleChart from '../../components/charts/SaleChart';
import Minichart from '../../components/charts/Minichart';
import Heading from '../../components/Heading';
import Weather from '../../components/Weather';
import { StyledHome } from './StyledHome';

const Home = () => {
  return (
    <StyledHome>
      <Heading headingType="h1">Home</Heading>
      <SaleChart width="80%" height="30%" />
      <Minichart type="orders">Total Income</Minichart>
      <Minichart type="users">Total Users</Minichart>
      <Minichart type="visits">Total Page Visits</Minichart>
      <Minichart type="comments">Total Comments</Minichart>
      <Weather />
    </StyledHome>
  );
};

export default Home;

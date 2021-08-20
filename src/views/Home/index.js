import React from 'react';
import {
  StyledHome,
  StyledSaleChart,
  StyledOrdersChart,
  StyledUsersChart,
  StyledVisitsChart,
  StyledCommentsChart,
  StyledWeather,
} from './StyledHome';

const Home = () => {
  return (
    <StyledHome>
      <StyledSaleChart />
      <StyledOrdersChart type="orders">Total Income</StyledOrdersChart>
      <StyledUsersChart type="users">Total Users</StyledUsersChart>
      <StyledVisitsChart type="visits">Total Page Visits</StyledVisitsChart>
      <StyledCommentsChart type="comments">Total Comments</StyledCommentsChart>
      <StyledWeather />
    </StyledHome>
  );
};

export default Home;

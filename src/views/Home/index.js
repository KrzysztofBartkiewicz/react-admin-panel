import React from 'react';
import {
  StyledHome,
  StyledHeading,
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
      <StyledHeading headingType="h1">Home</StyledHeading>
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

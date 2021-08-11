import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Heading from '../../Heading';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { getOrders } from '../../../redux/selectors';
import { getLastYearData, getLastMonthData, getLastWeekData } from './utils';
import { StyledButtonWrapper, StyledTopWrapper } from './StyledSaleChart';

const charts = {
  lastYear: 'lastYear',
  lastMonth: 'lastMonth',
  lastWeek: 'lastWeek',
};

const SaleChart = ({ width, height }) => {
  const orders = useSelector(getOrders);

  const [activeChart, setActiveChart] = useState(charts.lastYear);
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (activeChart) {
      case charts.lastMonth:
        return setData(getLastMonthData(orders));
      case charts.lastWeek:
        return setData(getLastWeekData(orders));

      default:
        return setData(getLastYearData(orders));
    }
  }, [activeChart, orders]);

  const handleChangeChart = (chart) => {
    setActiveChart(chart);
  };

  const renderTopWrapper = () => (
    <StyledTopWrapper>
      <Heading>Sale</Heading>
      <StyledButtonWrapper>
        <Button
          onClick={() => handleChangeChart(charts.lastYear)}
          variant="outlined"
          color="primary"
          disabled={activeChart === charts.lastYear}
        >
          Last Year
        </Button>
        <Button
          onClick={() => handleChangeChart(charts.lastMonth)}
          variant="outlined"
          color="primary"
          disabled={activeChart === charts.lastMonth}
        >
          Last Month
        </Button>
        <Button
          onClick={() => handleChangeChart(charts.lastWeek)}
          variant="outlined"
          color="primary"
          disabled={activeChart === charts.lastWeek}
        >
          Last Week
        </Button>
      </StyledButtonWrapper>
    </StyledTopWrapper>
  );

  return (
    <div style={{ width, height }}>
      {renderTopWrapper()}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="profit" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SaleChart;

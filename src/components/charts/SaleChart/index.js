import React, { useEffect, useState } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
} from 'react-vis';
import '../../../../node_modules/react-vis/dist/style.css';
import Heading from '../../Heading';
import Button from '@material-ui/core/Button';
import { getPercent } from '../../../helpers';
import { useSelector } from 'react-redux';
import { getOrders } from '../../../redux/selectors';
import { getLastYearData, getLastMonthData, getLastWeekData } from './utils';
import {
  StyledButtonWrapper,
  StyledSaleChart,
  StyledTopWrapper,
} from './StyledSaleChart';
import { CircularProgress } from '@material-ui/core';

const charts = {
  lastYear: 'lastYear',
  lastMonth: 'lastMonth',
  lastWeek: 'lastWeek',
};

const chartWidth = 40;
const chartHeight = 20;

const SaleChart = ({ className }) => {
  const orders = useSelector(getOrders);

  const [activeChart, setActiveChart] = useState(charts.lastYear);
  const [data, setData] = useState([]);
  const [size, setSize] = useState([
    getPercent(chartWidth, window.innerWidth),
    getPercent(chartHeight, window.innerHeight),
  ]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const handleResize = () => {
    const w = getPercent(chartWidth, window.innerWidth);
    const h = getPercent(chartHeight, window.innerHeight);

    setSize([w, h]);
  };

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
    <StyledSaleChart className={className}>
      {orders.length !== 0 ? (
        <div>
          {renderTopWrapper()}
          <XYPlot
            margin={{ left: 70 }}
            xType="ordinal"
            width={size[0]}
            height={size[1]}
            xDistance={100}
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <VerticalBarSeries barWidth={0.5} data={data} />
          </XYPlot>
        </div>
      ) : (
        <CircularProgress />
      )}
    </StyledSaleChart>
  );
};

export default SaleChart;

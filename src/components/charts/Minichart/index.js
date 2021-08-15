import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getOrders } from '../../../redux/selectors';
import Heading from '../../Heading';
import { StyledBar, StyledInner, StyledWrapper } from './StyledMinichart';
import { getTotalOrdersAvarage } from './utils';

const Minichart = ({ color }) => {
  const orders = useSelector(getOrders);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (orders.length !== 0) {
      setData(getTotalOrdersAvarage(orders));
    }
  }, [orders]);

  useEffect(() => console.log(data));

  return (
    <StyledWrapper>
      <Heading headingType="h4">Total orders</Heading>
      <StyledInner>
        {data &&
          data.map((bar) => (
            <StyledBar color="red" height={Math.ceil(bar / 80)} />
          ))}
      </StyledInner>
    </StyledWrapper>
  );
};

export default Minichart;

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getOrders } from '../../../redux/selectors';
import Heading from '../../Heading';
import { StyledBar, StyledInner, StyledWrapper } from './StyledMinichart';
import {
  getTotalComments,
  getTotalOrdersAvarage,
  getTotalUsers,
  getTotalVisits,
} from './utils';

const Minichart = ({ type, children, className }) => {
  const orders = useSelector(getOrders);
  const [data, setData] = useState(null);
  const [color, setColor] = useState('transparent');

  useEffect(() => {
    if (orders.length !== 0) {
      switch (type) {
        case 'orders':
          setData(getTotalOrdersAvarage(orders));
          setColor('red');
          break;
        case 'users':
          setData(getTotalUsers(orders));
          setColor('blue');
          break;
        case 'visits':
          setData(getTotalVisits());
          setColor('orange');
          break;
        case 'comments':
          setData(getTotalComments());
          setColor('purple');
        default:
          break;
      }
    }
  }, [orders]);

  return (
    <StyledWrapper className={className}>
      <Heading headingType="h4">{children}</Heading>
      <StyledInner>
        {data &&
          data.avarages.map((bar, index) => {
            const barHeight = data.max / 5.5;

            return (
              <StyledBar
                key={index}
                color={color}
                height={Math.ceil((data.max / barHeight) * (bar / barHeight))}
              />
            );
          })}
      </StyledInner>
    </StyledWrapper>
  );
};

export default Minichart;

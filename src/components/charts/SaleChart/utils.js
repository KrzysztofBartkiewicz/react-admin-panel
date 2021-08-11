import moment from 'moment';

export const getLastYearData = (orders) => {
  let data = [];

  for (let i = 11; i >= 0; i--) {
    const month = moment().subtract(i, 'month');
    const monthStart = moment(month).startOf('month');
    const monthEnd = moment(month).endOf('month');

    const sum = orders.reduce((acc, order) => {
      if (
        moment(order.createTime, 'DD-MM-YYYY').isBetween(monthStart, monthEnd)
      ) {
        return acc + parseInt(order.price);
      }
      return acc;
    }, 0);

    const bar = {
      name: moment(month).format('MMM'),
      profit: sum,
    };

    data.push(bar);
  }

  return data;
};

export const getLastMonthData = (orders) => {
  let data = [];

  for (let i = 30; i >= 0; i--) {
    const day = moment().subtract(i, 'days');

    const sum = orders.reduce((acc, order) => {
      const orderDate = moment(order.createTime, 'DD-MM-YYYY').format(
        'DD-MM-YYYY'
      );
      const currentDate = moment(day).format('DD-MM-YYYY');

      if (orderDate === currentDate) {
        return acc + parseInt(order.price);
      }
      return acc;
    }, 0);

    const bar = {
      name: moment(day).format('D'),
      profit: sum,
    };

    data.push(bar);
  }

  return data;
};

export const getLastWeekData = (orders) => {
  let data = [];

  for (let i = 7; i >= 0; i--) {
    const day = moment().subtract(i, 'days');

    const sum = orders.reduce((acc, order) => {
      const orderDate = moment(order.createTime, 'DD-MM-YYYY').format(
        'DD-MM-YYYY'
      );
      const currentDate = moment(day).format('DD-MM-YYYY');

      if (orderDate === currentDate) {
        return acc + parseInt(order.price);
      }
      return acc;
    }, 0);

    const bar = {
      name: `${i} ${moment.weekdaysShort(moment(day).weekday())}`,
      profit: sum,
    };

    data.push(bar);
  }

  return data;
};

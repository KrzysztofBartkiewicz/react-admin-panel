import moment from 'moment';

export const getTotalOrdersAvarage = (orders) => {
  const sorted = orders.sort(
    (a, b) =>
      moment(a.createTime, 'DD-MM-YYYY').unix() -
      moment(b.createTime, 'DD-MM-YYYY').unix()
  );

  let avarages = [];

  for (let i = 0; i < 8; i++) {
    const divided = sorted.slice(
      i * Math.floor(sorted.length / 8),
      Math.floor(sorted.length / 8) * (i + 1)
    );
    const avarage =
      divided.reduce((acc, curr) => (acc += curr.price), 0) / divided.length;

    avarages.push(Math.floor(avarage));
  }

  const min = Math.min(...avarages);
  const max = Math.max(...avarages);

  avarages.forEach((val, index, arr) => {
    arr[index] = val - min + 1;
  });

  return avarages;
};

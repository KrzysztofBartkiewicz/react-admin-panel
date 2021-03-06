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

  avarages.forEach((val, index, arr) => {
    arr[index] = val - min + 1;
  });

  const max = Math.max(...avarages);

  const percent = (
    (avarages[avarages.length - 1] / avarages[avarages.length - 2]) * 100 -
    100
  ).toFixed(0);

  return {
    avarages,
    max,
    percent: percent > 0 ? `+ ${Math.abs(percent)}` : `- ${Math.abs(percent)}`,
  };
};

export const getTotalUsers = (orders) => {
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
    const avarage = divided.reduce(
      (acc, curr) => (acc += curr.items.length),
      0
    );

    avarages.push(avarage);
  }

  const min = Math.min(...avarages);

  avarages.forEach((val, index, arr) => {
    arr[index] = val - min + 1;
  });

  const max = Math.max(...avarages);

  const percent = (
    (avarages[avarages.length - 1] / avarages[avarages.length - 2]) * 100 -
    100
  ).toFixed(0);

  return {
    avarages,
    max,
    percent: percent > 0 ? `+ ${Math.abs(percent)}` : `- ${Math.abs(percent)}`,
  };
};

export const getTotalVisits = () => {
  const avarages = new Array(8)
    .fill(0)
    .map(() => Math.floor(Math.random() * (100000 - 1000)) + 1000);
  const max = 100000;

  const percent = (
    (avarages[avarages.length - 1] / avarages[avarages.length - 2]) * 100 -
    100
  ).toFixed(0);

  return {
    avarages,
    max,
    percent: percent > 0 ? `+ ${Math.abs(percent)}` : `- ${Math.abs(percent)}`,
  };
};

export const getTotalComments = () => {
  const avarages = new Array(8)
    .fill(0)
    .map(() => Math.floor(Math.random() * (100 - 1)) + 1);
  const max = 100;

  const percent = (
    (avarages[avarages.length - 1] / avarages[avarages.length - 2]) * 100 -
    100
  ).toFixed(0);

  return {
    avarages,
    max,
    percent: percent > 0 ? `+ ${Math.abs(percent)}` : `- ${Math.abs(percent)}`,
  };
};

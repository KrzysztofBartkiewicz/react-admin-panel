export const getPercent = (percent, value) => {
  return (percent / 100) * value;
};

export const capitalize = (str) => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

export const capitalizeAll = (str) => {
  return str
    .split(' ')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ');
};

export const formatError = (err) => {
  return [...err.split('/')]
    .filter((el, index) => index === 1)
    .toString()
    .split('-')
    .map((word) => capitalize(word))
    .join(' ');
};

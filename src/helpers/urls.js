export const getOWEndpoint = (lat = 52.22, long = 21.01) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=alerts&units=metric&lang=en&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
};

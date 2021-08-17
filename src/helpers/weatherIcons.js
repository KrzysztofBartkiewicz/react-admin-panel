import { ReactComponent as Sun } from '../assets/icons/weather/clear-sky-d.svg';
import { ReactComponent as Cloud } from '../assets/icons/weather/broken-clouds.svg';
import { ReactComponent as CloudSun } from '../assets/icons/weather/few-clouds-d.svg';
import { ReactComponent as Showers } from '../assets/icons/weather/shower-rain.svg';
import { ReactComponent as Rain } from '../assets/icons/weather/rain-d.svg';
import { ReactComponent as Lightning } from '../assets/icons/weather/thunderstorms.svg';
import { ReactComponent as Snow } from '../assets/icons/weather/snow.svg';
import { ReactComponent as Fog } from '../assets/icons/weather/mist.svg';

import { ReactComponent as Moon } from '../assets/icons/weather/clear-sky-n.svg';
import { ReactComponent as CloudMoon } from '../assets/icons/weather/few-clouds-n.svg';
import { ReactComponent as RainMoon } from '../assets/icons/weather/rain-n.svg';

const getWeatherIcon = (iconID) => {
  switch (iconID) {
    case '01d':
      return Sun;
    case '02d':
      return CloudSun;
    case '03d':
      return Cloud;
    case '04d':
      return Cloud;
    case '09d':
      return Showers;
    case '10d':
      return Rain;
    case '11d':
      return Lightning;
    case '13d':
      return Snow;
    case '50d':
      return Fog;

    case '01n':
      return Moon;
    case '02n':
      return CloudMoon;
    case '03n':
      return Cloud;
    case '04n':
      return Cloud;
    case '09n':
      return Showers;
    case '10n':
      return RainMoon;
    case '11n':
      return Lightning;
    case '13n':
      return Snow;
    case '50n':
      return Fog;
    default:
      console.error('You passed invalid icon ID: ', iconID);
      return;
  }
};

export default getWeatherIcon;

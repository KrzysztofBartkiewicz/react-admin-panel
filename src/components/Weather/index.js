import React, { createElement } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { getWeather } from '../../redux/selectors';
import { capitalizeAll } from '../../helpers';
import getWeatherIcon from '../../helpers/weatherIcons';
import Paragraph from '../Paragraph';
import {
  StyledCurrentDecs,
  StyledCurrentTemp,
  StyledCurrentWeather,
  StyledCurrentDate,
  StyledHeading,
  StyledTopWrapper,
  StyledWeather,
  StyledCondition,
  StyledBottomWrapper,
  StyledDailyForecast,
} from './StyledWeather';

const Weather = () => {
  const weather = useSelector(getWeather);

  const renderTopWrapper = () => (
    <StyledTopWrapper>
      <StyledCurrentWeather>
        <StyledCurrentTemp>
          {weather &&
            `${weather.current.temp.toFixed(0)}${String.fromCharCode(176)}C`}
        </StyledCurrentTemp>
        {weather &&
          createElement(getWeatherIcon(weather.current.weather[0].icon), {
            width: '8rem',
            height: '8rem',
          })}
        <StyledCurrentDecs>
          {weather && capitalizeAll(weather.current.weather[0].description)}
        </StyledCurrentDecs>
      </StyledCurrentWeather>
      <StyledCurrentDate>
        {weather &&
          (() => {
            const date = moment.unix(weather.current.dt);
            return (
              <>
                <span>{date.format('dddd')}</span>
                <span>{date.format('MMM, D YYYY')}</span>
              </>
            );
          })()}
      </StyledCurrentDate>
    </StyledTopWrapper>
  );

  const renderConditions = () => (
    <>
      <StyledCondition>
        {weather && (
          <>
            <Paragraph>Wind</Paragraph>
            <Paragraph weight="bold">
              {((weather.current.wind_speed * 18) / 5).toFixed(0)} km/h
            </Paragraph>
          </>
        )}
      </StyledCondition>

      <StyledCondition>
        {weather && (
          <>
            <Paragraph>Sunrise</Paragraph>
            <Paragraph weight="bold">
              {moment(weather.current.sunrise).format('hh : mm')}
            </Paragraph>
          </>
        )}
      </StyledCondition>

      <StyledCondition>
        {weather && (
          <>
            <Paragraph>Pressure</Paragraph>
            <Paragraph weight="bold">{weather.current.pressure} hPa</Paragraph>
          </>
        )}
      </StyledCondition>
    </>
  );

  const renderBottomWrapper = () => (
    <StyledBottomWrapper>
      {weather &&
        weather.daily.map(
          ({ dt, weather, temp }, index) =>
            index !== 0 && (
              <StyledDailyForecast key={dt}>
                <Paragraph weight="bold">
                  {moment.unix(dt).format('ddd')}
                </Paragraph>
                {createElement(getWeatherIcon(weather[0].icon), {
                  width: '6rem',
                  height: '6rem',
                })}
                <Paragraph weight="bold">{`${temp.day.toFixed(
                  0
                )}${String.fromCharCode(176)}C`}</Paragraph>
              </StyledDailyForecast>
            )
        )}
    </StyledBottomWrapper>
  );

  return (
    <StyledWeather>
      <StyledHeading headingType="h4">Weather</StyledHeading>
      {renderTopWrapper()}
      {renderConditions()}
      {renderBottomWrapper()}
    </StyledWeather>
  );
};

export default Weather;

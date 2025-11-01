import { useState, useCallback } from 'react';
import { ForecastData, WeatherData } from '@/types/weather';
import { getTodayAndTomorrowWeather } from './weather-api';
import { formatDateTime, formatTemp } from './format';
import { getTomorrowForecast } from './weather-helpers';

interface FormattedWeatherData {
  city: string;
  todayTemp: number;
  todayDescription: string;
  tomorrowTemp: number;
  tomorrowDescription: string;
  details: {
    humidity: number;
    windSpeed: number;
    pressure: number;
    feelsLike: number;
    sunrise: string;
    sunset: string;
  };
}

export function useWeather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastWeatherData, setForecastWeatherData] =
    useState<ForecastData | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchWeather = useCallback(async (city: string) => {
    setIsLoading(true);
    setError('');

    try {
      const { today, forecast } = await getTodayAndTomorrowWeather(city);
      setWeatherData(today);
      setForecastWeatherData(forecast);
      setError('');
    } catch (error) {
      setError('お天気情報の取得に失敗しました。都市名を確認してください。');
      if (process.env.NODE_ENV === 'development') {
        console.error(error);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const formattedData: FormattedWeatherData | null =
    weatherData && forecastWeatherData
      ? {
          city: weatherData.name,
          todayTemp: formatTemp(weatherData.main.temp),
          todayDescription: weatherData.weather[0].description,
          tomorrowTemp: formatTemp(
            getTomorrowForecast(forecastWeatherData).main.temp
          ),
          tomorrowDescription:
            getTomorrowForecast(forecastWeatherData).weather[0].description,
          details: {
            humidity: weatherData.main.humidity,
            windSpeed: weatherData.wind.speed,
            pressure: weatherData.main.pressure,
            feelsLike: formatTemp(weatherData.main.feels_like),
            sunrise: formatDateTime(weatherData.sys.sunrise),
            sunset: formatDateTime(weatherData.sys.sunset),
          },
        }
      : null;

  return {
    weatherData: formattedData,
    isLoading,
    error,
    searchWeather,
  };
}

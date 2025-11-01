'use client';

import Heading from '@/components/Heading';
import MainWeatherCard from '@/components/MainWeatherCard';
import MainWeatherDetailCard from '@/components/WeatherDetailCard';
import {
  Droplets,
  Wind,
  Gauge,
  Sunrise,
  Sunset,
  Thermometer,
} from 'lucide-react';

import { WeatherData, ForecastData } from '@/types/weather';
import { useEffect, useState } from 'react';
import {
  getTodayAndTomorrowWeather,
  getWeatherByCity,
} from '@/lib/weather-api';
import { formatDateTime, formatTemp } from '@/lib/format';
import { Skeleton } from '@/components/ui/skeleton';
import { getTomorrowForecast } from '@/lib/weather-helpers';

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastWeatherData, setForecastWeatherData] =
    useState<ForecastData | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleSearch('東京');
  }, []);

  const handleSearch = async (city: string) => {
    setIsLoading(true);
    setError('');

    try {
      const { today, forecast } = await getTodayAndTomorrowWeather(city);
      setWeatherData(today);
      setForecastWeatherData(forecast);
      setError('');
    } catch (error) {
      setError('お天気情報の取得に失敗しました。都市名を確認してください。');
      console.error(error); //開発環境のみ記述
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-5">
        <Heading onSearch={handleSearch} />

        <Skeleton className="h-48 w-full rounded-lg" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-32 w-full rounded-lg" />
            ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-5">
        <Heading onSearch={handleSearch} />

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <p className="text-red-600 text-center">{error}</p>
          <p className="text-sm text-gray-600 text-center mt-2">
            別の都道府県名で検索してみてください
          </p>
        </div>
      </div>
    );
  }

  if (!weatherData || !forecastWeatherData) return null;

  const todayData = {
    city: weatherData.name,
    temp: formatTemp(weatherData.main.temp),
    description: weatherData.weather[0].description,
    humidity: weatherData.main.humidity,
    windSpeed: weatherData.wind.speed,
    pressure: weatherData.main.pressure,
    feelsLike: weatherData.main.feels_like,
    sunrise: formatDateTime(weatherData.sys.sunrise),
    sunset: formatDateTime(weatherData.sys.sunset),
  };

  const details = [
    {
      icon: Thermometer,
      label: '体感温度',
      value: todayData.feelsLike,
      unit: '℃',
      iconColor: 'text-red-500',
    },
    {
      icon: Droplets,
      label: '湿度',
      value: todayData.humidity,
      unit: '%',
      iconColor: 'text-blue-500',
    },
    {
      icon: Wind,
      label: '風速',
      value: todayData.windSpeed,
      unit: 'm/s',
      iconColor: 'text-gray-500',
    },
    {
      icon: Gauge,
      label: '気圧',
      value: todayData.pressure,
      unit: 'hPa',
      iconColor: 'text-purple-500',
    },
    {
      icon: Sunrise,
      label: '日の出',
      value: todayData.sunrise,
      iconColor: 'text-orange-500',
    },
    {
      icon: Sunset,
      label: '日没',
      value: todayData.sunset,
      iconColor: 'text-orange-500',
    },
  ];

  const tomorrowForecast = getTomorrowForecast(forecastWeatherData);
  const tomorrowData = {
    temp: formatTemp(tomorrowForecast.main.temp),
    description: tomorrowForecast.weather[0].description,
  };

  return (
    <div className="space-y-5">
      <Heading onSearch={handleSearch} />
      <MainWeatherCard
        city={todayData.city}
        todayTemp={todayData.temp}
        todayDescription={todayData.description}
        tomorrowTemp={tomorrowData.temp}
        tomorrowDescription={tomorrowData.description}
      />
      <div className="space-y-5">
        <h3 className="text-base md:text-lg font-semibold text-gray-700 px-1 pb-2 border-b border-gray-200">
          今日の詳細情報
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {details.map((detail, index) => {
            return (
              <MainWeatherDetailCard
                key={index}
                icon={detail.icon}
                label={detail.label}
                value={detail.value}
                unit={detail.unit}
                iconColor={detail.iconColor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

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

import { WeatherData } from '@/types/weather';
import { useEffect, useState } from 'react';
import { getWeatherByCity } from '@/lib/weather-api';
import { formatDateTime, formatTemp } from '@/lib/format';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleSearch('東京');
  }, []);

  const handleSearch = async (city: string) => {
    setIsLoading(true);
    setError('');

    try {
      const data = await getWeatherByCity(city);
      setWeatherData(data);
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

  if (!weatherData) return null;

  const weatherDatas = {
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
      value: weatherDatas.feelsLike,
      unit: '℃',
      iconColor: 'text-red-500',
    },
    {
      icon: Droplets,
      label: '湿度',
      value: weatherDatas.humidity,
      unit: '%',
      iconColor: 'text-blue-500',
    },
    {
      icon: Wind,
      label: '風速',
      value: weatherDatas.windSpeed,
      unit: 'm/s',
      iconColor: 'text-gray-500',
    },
    {
      icon: Gauge,
      label: '気圧',
      value: weatherDatas.pressure,
      unit: 'hPa',
      iconColor: 'text-purple-500',
    },
    {
      icon: Sunrise,
      label: '日の出',
      value: weatherDatas.sunrise,
      iconColor: 'text-orange-500',
    },
    {
      icon: Sunset,
      label: '日没',
      value: weatherDatas.sunset,
      iconColor: 'text-orange-500',
    },
  ];

  return (
    <div className="space-y-5">
      <Heading onSearch={handleSearch} />
      <MainWeatherCard
        city={weatherDatas.city}
        temp={weatherDatas.temp}
        description={weatherDatas.description}
      />
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
  );
}

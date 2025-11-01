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
import { Skeleton } from '@/components/ui/skeleton';
import { useWeather } from '@/lib/useWeather';
import { useEffect } from 'react';

export default function Home() {
  const { weatherData, isLoading, error, searchWeather } = useWeather();

  useEffect(() => {
    searchWeather('東京');
  }, [searchWeather]);

  if (isLoading) {
    return (
      <div className="space-y-5">
        <Heading onSearch={searchWeather} />

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
        <Heading onSearch={searchWeather} />

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <p className="text-red-600 text-center">{error}</p>
          <p className="text-sm text-gray-600 text-center mt-2">
            別の都道府県名で検索してみてください
          </p>
        </div>
      </div>
    );
  }

  const details = [
    {
      icon: Thermometer,
      label: '体感温度',
      value: weatherData?.details.feelsLike,
      unit: '℃',
      iconColor: 'text-red-500',
    },
    {
      icon: Droplets,
      label: '湿度',
      value: weatherData?.details.humidity,
      unit: '%',
      iconColor: 'text-blue-500',
    },
    {
      icon: Wind,
      label: '風速',
      value: weatherData?.details.windSpeed,
      unit: 'm/s',
      iconColor: 'text-gray-500',
    },
    {
      icon: Gauge,
      label: '気圧',
      value: weatherData?.details.pressure,
      unit: 'hPa',
      iconColor: 'text-purple-500',
    },
    {
      icon: Sunrise,
      label: '日の出',
      value: weatherData?.details.sunrise,
      iconColor: 'text-orange-500',
    },
    {
      icon: Sunset,
      label: '日没',
      value: weatherData?.details.sunset,
      iconColor: 'text-orange-500',
    },
  ];

  return (
    <div className="space-y-5">
      <Heading onSearch={searchWeather} />
      <MainWeatherCard
        city={weatherData?.city}
        todayTemp={weatherData?.todayTemp}
        todayDescription={weatherData?.todayDescription}
        tomorrowTemp={weatherData?.tomorrowTemp}
        tomorrowDescription={weatherData?.tomorrowDescription}
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

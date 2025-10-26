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
import { useState } from 'react';
import { getWeatherByCity } from '@/lib/weather-api';

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState('');

  console.log(weatherData);

  const handleSearch = async (city: string) => {
    setError('');

    try {
      const data = await getWeatherByCity(city);
      setWeatherData(data);
    } catch (error) {
      setError('お天気情報の取得に失敗しました。都市名を確認してください。');
      console.error(error);
    }
  };

  const weatherDatas = {
    city: '大阪府',
    temp: 25,
    description: '晴れ',
    humidity: 60,
    windSpeed: 3.5,
    pressure: 1013,
    feelsLike: 23,
    sunrise: '05:30',
    sunset: '18:45',
  };

  const details = [
    {
      icon: Thermometer,
      label: '体感温度',
      value: weatherDatas.feelsLike,
      unit: '℃',
      iconColor: 'text-blue-500',
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
      iconColor: 'text-blue-500',
    },
    {
      icon: Gauge,
      label: '気圧',
      value: weatherDatas.pressure,
      unit: 'hPa',
      iconColor: 'text-blue-500',
    },
    {
      icon: Sunrise,
      label: '日の出',
      value: weatherDatas.sunrise,
      iconColor: 'text-blue-500',
    },
    {
      icon: Sunset,
      label: '日没',
      value: weatherDatas.sunset,
      iconColor: 'text-blue-500',
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

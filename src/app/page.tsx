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

export default function Home() {
  const weatherData = {
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
      value: weatherData.feelsLike,
      unit: '℃',
      iconColor: 'text-blue-500',
    },
    {
      icon: Droplets,
      label: '湿度',
      value: weatherData.humidity,
      unit: '%',
      iconColor: 'text-blue-500',
    },
    {
      icon: Wind,
      label: '風速',
      value: weatherData.windSpeed,
      unit: 'm/s',
      iconColor: 'text-blue-500',
    },
    {
      icon: Gauge,
      label: '気圧',
      value: weatherData.pressure,
      unit: 'hPa',
      iconColor: 'text-blue-500',
    },
    {
      icon: Sunrise,
      label: '日の出',
      value: weatherData.sunrise,
      iconColor: 'text-blue-500',
    },
    {
      icon: Sunset,
      label: '日没',
      value: weatherData.sunset,
      iconColor: 'text-blue-500',
    },
  ];
  return (
    <div className="space-y-5">
      <Heading />
      <MainWeatherCard
        city={weatherData.city}
        temp={weatherData.temp}
        description={weatherData.description}
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

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

import { Droplets, Wind, Gauge, Sunrise, Sunset } from 'lucide-react';

interface WeatherCardProps {
  city: string;
  temp: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
  sunrise: string;
  sunset: string;
}

export default function WeatherCard({
  city,
  temp,
  humidity,
  windSpeed,
  pressure,
  sunrise,
  sunset,
}: WeatherCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{city}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center py-4">
          <div className="text-5xl font-bold text-gray-900">{temp}℃</div>
          <p className="text-gray-600 mt-2">晴れ</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Droplets className="w-5 h-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-600">湿度</p>
              <p className="font-semibold">{humidity}%</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="w-5 h-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-600">風速</p>
              <p className="font-semibold">{windSpeed} m/s</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-5 h-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-600">気圧</p>
              <p className="font-semibold">{pressure} hPa</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Sunrise className="w-5 h-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-600">日の出</p>
              <p className="font-semibold">{sunrise}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Sunset className="w-5 h-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-600">日没</p>
              <p className="font-semibold">{sunset}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import DailyWeather from './DailyWeather';

interface MainWeatherCardProps {
  city: string | undefined;
  todayTemp: number | undefined;
  todayDescription: string | undefined;
  tomorrowTemp: number | undefined;
  tomorrowDescription: string | undefined;
}

export default function MainWeathrCard({
  city,
  todayTemp,
  todayDescription,
  tomorrowTemp,
  tomorrowDescription,
}: MainWeatherCardProps) {
  return (
    <Card className="col-span-full">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-lg sm:text-xl md:text-2xl">
          {city}の天気
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4 md:p-6">
        <div className="flex justify-around">
          <DailyWeather
            label="今日"
            temp={todayTemp}
            description={todayDescription}
            iconColor="text-blue-500"
          />
          <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-gray-400 hidden md:block" />

          <DailyWeather
            label="明日"
            temp={tomorrowTemp}
            description={tomorrowDescription}
            iconColor="text-blue-500"
          />
        </div>
      </CardContent>
    </Card>
  );
}

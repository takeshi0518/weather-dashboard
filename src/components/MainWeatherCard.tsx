import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CloudSun, Redo } from 'lucide-react';

interface MainWeatherCardProps {
  city: string | undefined;
  temp: number | undefined;
  description: string | undefined;
}

export default function MainWeathrCard({
  city,
  temp,
  description,
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
          <div className="text-center space-y-2">
            <h2 className="text-sm sm:text-lg md:text-2xl font-bold text-gray-900">
              今日
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-3 mt-4">
              <CloudSun className="w-12 md:w-14 h-12 md:h-14 text-blue-500" />
              <div className="md:ml-3">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">
                  {temp}℃
                </div>
                <p className="text-sm md:text-base text-gray-600">
                  {description}
                </p>
              </div>
            </div>
          </div>

          <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-gray-400 hidden md:block" />

          <div className="text-center space-y-2">
            <h2 className="text-sm sm:text-lg md:text-2xl font-bold text-gray-900">
              今日
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-3 mt-4">
              <CloudSun className="w-12 md:w-14 h-12 md:h-14 text-blue-500" />
              <div className="md:ml-3">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">
                  {temp}℃
                </div>
                <p className="text-sm md:text-base text-gray-600">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

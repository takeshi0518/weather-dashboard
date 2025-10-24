import { Card, CardContent } from '@/components/ui/card';
import { CloudSun } from 'lucide-react';

interface MainWeatherCardProps {
  city: string;
  temp: number;
  description: string;
}

export default function MainWeathrCard({
  city,
  temp,
  description,
}: MainWeatherCardProps) {
  return (
    <Card className="col-span-full">
      <CardContent className="p-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">{city}の天気</h2>
          <CloudSun className="w-12 h-12 mx-auto" />
          <div className="text-4xl font-bold text-gray-900">{temp}℃</div>
          <p className="text-base text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

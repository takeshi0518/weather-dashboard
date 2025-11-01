import { CloudSun } from 'lucide-react';

interface DailyWeatherProps {
  label: string | undefined;
  temp: number | undefined;
  description: string | undefined;
  iconColor?: string;
}

export default function DailyWeather({
  label,
  temp,
  description,
  iconColor = 'text-blue-500',
}: DailyWeatherProps) {
  return (
    <div className="text-center space-y-2">
      <h2 className="text-sm sm:text-lg md:text-2xl font-bold text-gray-900">
        {label}
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-3 mt-4">
        <CloudSun className={`w-12 md:w-14 h-12 md:h-14 ${iconColor}`} />
        <div className="md:ml-3">
          <div className="text-3xl md:text-4xl font-bold text-gray-900">
            {temp}℃
          </div>
          <p className="text-sm md:text-base text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

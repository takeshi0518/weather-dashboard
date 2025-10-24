import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface WeatherDetailCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  unit?: string;
  iconColor?: string;
}

export default function WeatherDetailCard({
  icon: Icon,
  label,
  value,
  unit,
  iconColor = 'text-blue-500',
}: WeatherDetailCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col items-center text-center space-y-2">
          <Icon className={`w-8 h-8 ${iconColor}`} />
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-2xl font-bold text-gray-900">
            {value}
            {unit && <span className="text-lg ml-1">{unit}</span>}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

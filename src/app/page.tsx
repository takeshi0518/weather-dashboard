import Heading from '@/components/Heading';
import WeatherCard from '@/components/WeatherCard';

export default function Home() {
  return (
    <div className="space-y-8">
      <Heading />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <WeatherCard
          city="大阪府"
          temp={25}
          humidity={60}
          windSpeed={3.5}
          pressure={1013}
          sunrise="05:30"
          sunset="18:45"
        />
      </div>
    </div>
  );
}

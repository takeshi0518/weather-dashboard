import { ForecastData, ForecastItem } from '@/types/weather';

export function getTomorrowForecast(forecastData: ForecastData): ForecastItem {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(12, 0, 0, 0);

  return forecastData.list.reduce((prev, curr) => {
    const currDate = new Date(curr.dt * 1000);
    const prevDate = new Date(curr.dt * 1000);

    const currDiff = Math.abs(currDate.getTime() - tomorrow.getTime());
    const prevDiff = Math.abs(prevDate.getTime() - tomorrow.getTime());

    return currDiff < prevDiff ? curr : prev;
  });
}

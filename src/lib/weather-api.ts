import { WeatherData } from '@/types/weather';

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function getWeatherByCity(city: string): Promise<WeatherData> {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=ja`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`天気情報の取得に失敗しました: ${response.statusText}`);
  }

  const data: WeatherData = await response.json();
  return data;
}

export async function getWeatherByCoords(
  lat: number,
  lon: number
): Promise<WeatherData> {
  const url = `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ja`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`天気情報の取得に失敗しました: ${response.statusText}`);
  }

  const data: WeatherData = await response.json();
  return data;
}

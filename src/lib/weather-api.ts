import { WeatherData, ForecastData } from '@/types/weather';
import { convertCityName } from './city-mapping';

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

if (!API_KEY) {
  throw new Error('NEXT_PUBLIC_OPENWEATHER_API_KEYが設定されていません。');
}

/*天気を取得(今日)*/
export async function getWeatherByCity(city: string): Promise<WeatherData> {
  const convertedCity = convertCityName(city);

  const params = new URLSearchParams({
    q: convertedCity,
    appid: API_KEY!,
    units: 'metric',
    lang: 'ja',
  });

  const url = `${WEATHER_BASE_URL}?${params.toString()}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`天気情報の取得に失敗しました: ${response.statusText}`);
  }

  const data = await response.json();

  return data;
}

/*天気情報を取得(未来)*/
export async function getForecastWeatherByCity(
  city: string
): Promise<ForecastData> {
  const convertedCity = convertCityName(city);

  const params = new URLSearchParams({
    q: convertedCity,
    appid: API_KEY!,
    units: 'metric',
    lang: 'ja',
  });

  const url = `${FORECAST_BASE_URL}?${params.toString()}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`天気情報の取得に失敗しました: ${response.statusText}`);
  }

  const data = await response.json();

  return data;
}

export async function getTodayAndTomorrowWeather(city: string) {
  const [today, forecast] = await Promise.all([
    getWeatherByCity(city),
    getForecastWeatherByCity(city),
  ]);
  return { today, forecast };
}

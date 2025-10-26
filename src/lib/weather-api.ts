import { WeatherData } from '@/types/weather';

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const GEO_BASE_URL = 'https://api.openweathermap.org/geo/1.0/direct';

if (!API_KEY) {
  throw new Error('NEXT_PUBLIC_OPENWEATHER_API_KEYが設定されていません。');
}

export async function getWeatherByCity(city: string): Promise<WeatherData> {
  const geoParams = new URLSearchParams({
    q: city.trim(),
    limit: '1',
    appid: API_KEY!,
  });

  const geoUrl = `${GEO_BASE_URL}?${geoParams.toString()}`;

  const geoResponse = await fetch(geoUrl);

  if (!geoResponse.ok) {
    throw new Error(`天気情報の取得に失敗しました: ${geoResponse.statusText}`);
  }

  const geoData = await geoResponse.json();

  if (!geoData || geoData.length === 0) {
    throw new Error(`都市「${city}」が見つかりませんでした。`);
  }

  const { lat, lon } = geoData[0];

  return getWeatherByCoords(lat, lon);
}

export async function getWeatherByCoords(
  lat: number,
  lon: number
): Promise<WeatherData> {
  const params = new URLSearchParams({
    lat: lat.toString(),
    lon: lon.toString(),
    appid: API_KEY!,
    units: 'metric',
    lang: 'ja',
  });

  const url = `${WEATHER_BASE_URL}?${params.toString()}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`天気情報の取得に失敗しました: ${response.statusText}`);
  }

  const data: WeatherData = await response.json();
  return data;
}

# ⛅️ weather-dashboard

リアルタイムで天気情報を取得・表示する天気ダッシュボードアプリケーション

## 機能

- **都道府県名で検索** - 日本語入力に対応
- **今日と明日の天気情報** - 天候と気温を表示
- **詳細な天気情報** - 気温、湿度、風速、気圧など
- **リアルタイムの時刻表示** - 現在時刻と日付を表示
- **レスポンシブデザイン** - モバイル・タブレット・PC に対応

## 技術スタック

### フロントエンド

- **Next.js 15**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**

### API

- **OpneWeather API** - 天気情報の取得

## セットアップ

### インストール

1. リポジトリをクローン

```bash
$ git clone https://github.com/takeshi0518/weather-dashboard.git

$ cd weather-dashboard
```

2. 依存関係をインストール

```bash
$ npm install
```

3. 環境変数を設定

```bash
$ cp .env.local
```

`.env.local`を編集して API キーを設定:

```env
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

4. 開発サーバーを起動

```bash
$ npm run dev
```

5. ブラウザを開く

```
http://localhost:3000
```

### 日本語対応の実装

OpneWeather API は日本語の都市名を直接受け付けないため、  
都道府県名を県庁所在地の英語名にマッピングするテーブルを実装しました。

## 今後の改善予定

- [ ] 週間天気予報の表示
- [ ] 位置情報による自動取得
- [ ] ダークモード対応
- [ ] 多言語対応(英語・日本語切り替え)

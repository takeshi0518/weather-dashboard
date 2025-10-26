export function formatDateTime(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleTimeString('ja-JP', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function formatTemp(temp: number): number {
  return Math.round(temp);
}

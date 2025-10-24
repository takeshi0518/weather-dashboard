import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDateToLocal = (
  dateStr: string | number,
  locale: string = 'ja-JP'
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    dateStyle: 'full',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const formatTimeToLocal = (
  dateStr: string | number,
  locale: string = 'ja-JP'
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

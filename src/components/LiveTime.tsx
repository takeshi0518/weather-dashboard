'use client';

import { useEffect, useState } from 'react';
import { formatDateTolocal, formatTimeToLocal } from '@/lib/utils';

export default function LiveTime() {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <div>{formatTimeToLocal(currentTime)}</div>
      <div>{formatDateTolocal(currentTime)}</div>
    </div>
  );
}

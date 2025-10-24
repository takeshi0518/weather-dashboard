'use client';

import { useEffect, useState } from 'react';
import { formatDateToLocal, formatTimeToLocal } from '@/lib/utils';

export default function LiveTime() {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="space-y-2">
        <div className="text-2xl md:text-3xl text-gray-900">
          {formatTimeToLocal(currentTime)}
        </div>
        <div className="text-3xl md:text-4xl text-gray-600">
          {formatDateToLocal(currentTime)}
        </div>
      </div>
    </div>
  );
}

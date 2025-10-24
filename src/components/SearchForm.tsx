'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!query.trim()) {
      setError('市区町村名または郵便番号を入力してください');
      return;
    }
    console.log('検索', query);
  };

  useEffect(() => {
    const timer = setTimeout(() => setError(''), 3000);
    return () => clearTimeout(timer);
  }, [error]);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="市区町村名または郵便番号を入力"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
          className={`flex-1 ${error ? 'border-red-500' : ''}`}
        />
        <Button
          onClick={handleSearch}
          className="cursor-pointer bg-gray-900 text-white"
        >
          <Search className="w-4 h-4" />
          検索
        </Button>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

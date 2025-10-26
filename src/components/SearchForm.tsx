'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchFormProps {
  onSearch: (city: string) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!query.trim()) {
      setError('都道府県名を入力してください。');
      setTimeout(() => setError(''), 3000);
      return;
    }

    setError('');
    onSearch(query);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="都道府県名を入力してください。(例: 東京都 大阪府)"
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

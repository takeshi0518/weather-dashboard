'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormEvent, useState } from 'react';
import { Search } from 'lucide-react';

interface SearchFormProps {
  onSearch: (city: string) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) {
      setError('都道府県名を入力してください。');
      setTimeout(() => setError(''), 3000);
      return;
    }

    setError('');
    onSearch(query);
    setQuery('');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 space-y-3 xl:min-w-[600px]">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="text"
          placeholder="都道府県を入力 (例: 東京都 大阪府)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`flex-1 ${error ? 'border-red-500' : ''}`}
        />
        <Button className="cursor-pointer bg-gray-900 text-white" type="submit">
          <Search className="w-4 h-4 sm:mr-2" />
          <span className="hidden sm:inline">検索</span>
        </Button>
      </form>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

'use client';

import LiveTime from './LiveTime';
import SearchForm from './SearchForm';

interface HeadingProps {
  onSearch: (city: string) => void;
}

export default function Heading({ onSearch }: HeadingProps) {
  return (
    <section className="space-y-6">
      <LiveTime />
      <SearchForm onSearch={onSearch} />
    </section>
  );
}

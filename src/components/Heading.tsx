'use client';

import SearchForm from './SearchForm';
import dynamic from 'next/dynamic';

const LiveTime = dynamic(() => import('./LiveTime'), { ssr: false });

interface HeadingProps {
  onSearch: (city: string) => void;
}

export default function Heading({ onSearch }: HeadingProps) {
  return (
    <section className="space-y-6 lg:space-y-0 xl:flex xl:items-center xl:justify-between xl:gap-6">
      <LiveTime />
      <SearchForm onSearch={onSearch} />
    </section>
  );
}

import Link from 'next/link';
import { CloudSun } from 'lucide-react';

export default function MainLogo() {
  return (
    <Link href="/" className="hover:text-gray-300 transition-colors">
      <CloudSun className=" w-12 h-12 md:w-14 md:h-14 mb-1 text-yellow-400" />
    </Link>
  );
}

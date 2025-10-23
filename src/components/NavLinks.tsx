'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/config/navigation';

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        const Icon = link.icon;
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`flex items-center gap-2 p-3 rounded-lg text-sm md:text-base
                ${isActive ? 'bg-gray-800' : 'hover:bg-gray-800'}
                `}
            >
              <Icon className="w-6 h-6 md:w-5 md:h-5" />
              <span className="hidden md:inline">{link.name}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
}

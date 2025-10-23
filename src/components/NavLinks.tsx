import Link from 'next/link';

const links = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Greenergy', href: '/greenergy' },
  { name: 'Ccalendar', href: '/ccalendar' },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className="block p-3 rounded-lg hover:bg-gray-800 transition-colors md:p-3 text-sm md:text-base"
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
}

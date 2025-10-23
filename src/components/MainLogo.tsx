import Link from 'next/link';

export default function MainLogo() {
  return (
    <Link href="/">
      <h1 className="text-xl font-bold hover:text-gray-300 transition-colors">
        Logo
      </h1>
    </Link>
  );
}

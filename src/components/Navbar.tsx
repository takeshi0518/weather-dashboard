import MainLogo from './MainLogo';
import NavLinks from './NavLinks';

export default function Navbar() {
  return (
    <>
      <header className="md:hidden flex items-center justify-between fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 border-b border-gray-800">
        <MainLogo />
        <nav>
          <ul className="flex gap-3">
            <NavLinks />
          </ul>
        </nav>
      </header>

      <aside className="hidden md:flex flex-col w-52 h-full bg-gray-900 text-white p-4">
        <div className="mb-8">
          <MainLogo />
        </div>
        <nav className="flex-1">
          <ul className="flex flex-col gap-2">
            <NavLinks />
          </ul>
        </nav>
      </aside>
    </>
  );
}

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg)] text-[var(--fg)] shadow-md border-b border-[var(--muted)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">Will Gaither</div>
        <div className="space-x-6">
          <Link href="/" className="hover:text-[var(--primary)]">About</Link>
          <Link href="/projects" className="hover:text-[var(--primary)]">Projects</Link>
          <Link href="/contact" className="hover:text-[var(--primary)]">Contact</Link>
          <Link href="/resume" className="hover:text-[var(--primary)]">Resume</Link>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

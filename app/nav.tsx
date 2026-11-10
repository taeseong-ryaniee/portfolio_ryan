'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { href: '/', label: 'Home' },
  { href: '/director', label: 'Bio' },
  { href: '/work', label: 'Project' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav({ className }: { className: string }) {
  const pathname = usePathname();
  return (
    <nav className={className} aria-label="주요 메뉴">
      <ul>
        {items.map(({ href, label }) => {
          const current = pathname === href || pathname.startsWith(href + '/');
          return (
            <li key={href}>
              <Link href={href} aria-current={current ? 'page' : undefined}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

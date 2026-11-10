'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { href: '/director', label: '디렉터' },
  { href: '/work', label: '작업' },
  { href: '/contact', label: '문의' },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="gnb" aria-label="주요 메뉴">
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

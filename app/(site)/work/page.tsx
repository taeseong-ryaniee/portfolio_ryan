import type { Metadata } from 'next';
import Link from 'next/link';
import s from './work.module.css';

export const metadata: Metadata = { title: '작업' };

const notion = 'https://ryantaeseong.notion.site/TaeSeong-s-Curatorial-Works-';
const groups = [
  {
    title: 'WEB PUBLISHING',
    items: [
      { href: '/work/web01', kr: '토탈미술관', en: 'TOTAL MUSEUM OF CONTEMPORARY ART' },
      { href: '/work/web02', kr: '전주 맛있는교회', en: 'TASTY CHURCH, JEON - JU' },
      { href: '/work/web03', kr: '예술경영지원센터', en: 'KOREA ART MANAGEMENT SERVICE(KAMS)' },
    ],
  },
  {
    title: 'BRAND IDENTITY',
    items: [{ href: '/work/podcast', kr: '산만이들의 밤(팟캐스트)', en: 'NIGHT OF DISTRACTED PEOPLE(PODCAST)' }],
  },
  {
    title: 'DESIGN WORK',
    items: [
      { href: 'http://', kr: '웹포스터', en: 'WEB POSTER' },
      { href: 'http://', kr: 'SNS 배너 디자인', en: 'SNS BANNER DESIGN' },
    ],
  },
  {
    title: 'CURATORIAL WORK',
    items: [
      { href: notion + 'cce04b6332114e8bb734093f9263633c?pvs=4', kr: '전시', en: 'ART EXHIBITION' },
      { href: notion + 'b05830aac75b49779265b943d512aef8?pvs=4', kr: '교육프로그램', en: 'EDUCATION PROGRAM' },
    ],
  },
];

export default function Work() {
  return (
    <main className={s.work}>
      <div className="container">
        <h1 className={s.title}>PROJECT</h1>
        {groups.map(({ title, items }) => (
          <div className={s.group} key={title}>
            <h2 className={s.cat}>{title}</h2>
            <ul className={s.list}>
              {items.map(({ href, kr, en }) => {
                const label = <><span>{kr}</span><span className={s.en}>{en}</span></>;
                return (
                  <li key={kr}>
                    {href.startsWith('/')
                      ? <Link href={href}>{label}</Link>
                      : <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}

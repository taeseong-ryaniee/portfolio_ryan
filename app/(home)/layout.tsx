import '../reset.css';
import '../base.css';
import './home.css';
import { elms } from '../fonts';
import { metadata as siteMetadata } from '../metadata';

export const metadata = siteMetadata;

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={elms.variable}>
      <head>
        {/* 넥슨 Lv.1 고딕: 글자 범위별로 쪼갠 woff2. 페이지에 쓰인 글자가 든 조각만 받는다 */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fonts-archive/NEXONLv1Gothic/subsets/NEXONLv1Gothic-dynamic-subset.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}

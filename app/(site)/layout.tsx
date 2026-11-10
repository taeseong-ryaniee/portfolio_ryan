import { Montserrat } from 'next/font/google';
import '../reset.css';
import '../base.css';
import '../globals.css';
import Header from '../header';
import { elms } from '../fonts';
import { metadata as siteMetadata } from '../metadata';

// 작업 상세의 폰트 견본(Neuzeit Grotesk 대체)에서만 쓴다.
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${elms.variable} ${montserrat.variable}`}>
      <head>
        {/* 넥슨 Lv.1 고딕: 글자 범위별로 쪼갠 woff2. 페이지에 쓰인 글자가 든 조각만 받는다 */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fonts-archive/NEXONLv1Gothic/subsets/NEXONLv1Gothic-dynamic-subset.css" />
      </head>
      <body>
        <Header />
        {children}
        <footer className="container site-footer">
          <p>Copyright AHOLIAB.WORKS 2026. All rights reserved. · Director 이태성</p>
        </footer>
      </body>
    </html>
  );
}

import { Elms_Sans, Montserrat } from 'next/font/google';
import Link from 'next/link';
import '../reset.css';
import '../globals.css';
import Nav from '../nav';
import { metadata as siteMetadata } from '../metadata';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

// 영문 서체. 한글 글리프가 없어 한글은 --display/--text 의 다음 서체(A2Z·Wanted Sans)로 넘어간다.
const elms = Elms_Sans({
  subsets: ['latin'],
  variable: '--font-elms',
  display: 'swap',
});

export const metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${elms.variable} ${montserrat.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.1/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css" />
      </head>
      <body>
        {/* BI v1.0 심볼 (aholiab-mark-clean.svg). 색은 .mark 의 --mark-body / --mark-cut 으로만 바꾼다 */}
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
          <symbol id="mark" viewBox="0 0 200 273">
            <g style={{ fill: 'var(--mark-body)' }}>
              <path d="M0,100 A100,100 0 0 1 200,100 Z" />
              <rect x="0" y="105" width="200" height="168" />
            </g>
            <g style={{ fill: 'var(--mark-cut)' }}>
              <path d="M195,200 A90,90 0 0 0 105,110 V200 Z" />
              <path d="M195,268 A90,90 0 0 0 105,178 V268 Z" />
              <path d="M100,268 A90,90 0 0 0 10,178 V188 A80,80 0 0 1 90,268 Z" />
              <rect x="5" y="110" width="10" height="158" />
            </g>
          </symbol>
        </svg>

        <header className="site-header">
          <div className="container header-row">
            <Link className="signature" href="/" aria-label="AHOLIAB.WORKS 처음으로">
              <svg className="mark" viewBox="0 0 200 273" aria-hidden="true"><use href="#mark" /></svg>
              <span className="wordmark">AHOLIAB<b>.WORKS</b></span>
            </Link>
            <Nav />
          </div>
        </header>

        {children}

        <footer className="site-footer"><div className="container footer-row"><span className="wordmark">AHOLIAB<b>.WORKS</b></span><p>Copyright AHOLIAB.WORKS 2026. All rights reserved. · Director 이태성</p></div></footer>
      </body>
    </html>
  );
}

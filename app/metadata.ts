import type { Metadata } from 'next';

// Shared by the two root layouts: (home) keeps the original first screen, (site) the AHOLIAB design.
export const metadata: Metadata = {
  title: {
    default: 'AHOLIAB.WORKS | 오홀리압 웍스 — Director 이태성',
    template: '%s | AHOLIAB.WORKS',
  },
  description: '조각, 직조, 자수 — 세 가지 손으로 일하는 작업실, 오홀리압 웍스. 디렉터 이태성의 작업 기록입니다.',
  keywords: 'AHOLIAB.WORKS, 오홀리압 웍스, 이태성, TaeSeong Ryan YI, Aholiab, UI/UX, 디자인, 포트폴리오',
  authors: [{ name: '이태성' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/aholiab-mark.svg', type: 'image/svg+xml' },
    ],
  },
};

import { Elms_Sans } from 'next/font/google';

// 영문 서체. 한글 글리프가 없어 한글은 base.css 의 다음 서체(넥슨 Lv.1 고딕)로 넘어간다.
export const elms = Elms_Sans({ subsets: ['latin'], variable: '--font-elms', display: 'swap' });

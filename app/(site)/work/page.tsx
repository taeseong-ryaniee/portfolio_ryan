import type { Metadata } from 'next';
import Link from 'next/link';
import s from './work.module.css';

export const metadata: Metadata = { title: '작업' };

export default function Work() {
  return (
    <main className={s.work}>
      <div className="container">
        <h1 className="section-title">작업</h1>
        <p className="eyebrow">PROJECT</p>

        <div className={s.group}>
          <h3 className={s.cat}>WEB PUBLISHING</h3>
          <ul className={s.list}>
            <li><Link href="/work/web01"><span className={s.kr}>토탈미술관</span><span className={s.en}>TOTAL MUSEUM OF CONTEMPORARY ART</span><span className={s.arrow} aria-hidden="true">→</span></Link></li>
            <li><Link href="/work/web02"><span className={s.kr}>전주 맛있는교회</span><span className={s.en}>TASTY CHURCH, JEON - JU</span><span className={s.arrow} aria-hidden="true">→</span></Link></li>
            <li><Link href="/work/web03"><span className={s.kr}>예술경영지원센터</span><span className={s.en}>KOREA ART MANAGEMENT SERVICE(KAMS)</span><span className={s.arrow} aria-hidden="true">→</span></Link></li>
          </ul>
        </div>
        <div className={s.group}>
          <h3 className={s.cat}>BRAND IDENTITY</h3>
          <ul className={s.list}>
            <li><Link href="/work/podcast"><span className={s.kr}>산만이들의 밤(팟캐스트)</span><span className={s.en}>NIGHT OF DISTRACTED PEOPLE(PODCAST)</span><span className={s.arrow} aria-hidden="true">→</span></Link></li>
          </ul>
        </div>
        <div className={s.group}>
          <h3 className={s.cat}>DESIGN WORK</h3>
          <ul className={s.list}>
            <li><a href="http://" target="_blank" rel="noopener noreferrer"><span className={s.kr}>웹포스터</span><span className={s.en}>WEB POSTER</span><span className={s.arrow} aria-hidden="true">↗</span></a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer"><span className={s.kr}>SNS 배너 디자인</span><span className={s.en}>SNS BANNER DESIGN</span><span className={s.arrow} aria-hidden="true">↗</span></a></li>
          </ul>
        </div>
        <div className={s.group}>
          <h3 className={s.cat}>CURATORIAL WORK</h3>
          <ul className={s.list}>
            <li><a href="https://ryantaeseong.notion.site/TaeSeong-s-Curatorial-Works-cce04b6332114e8bb734093f9263633c?pvs=4" target="_blank" rel="noopener noreferrer"><span className={s.kr}>전시</span><span className={s.en}>ART EXHIBITION</span><span className={s.arrow} aria-hidden="true">↗</span></a></li>
            <li><a href="https://ryantaeseong.notion.site/TaeSeong-s-Curatorial-Works-b05830aac75b49779265b943d512aef8?pvs=4" target="_blank" rel="noopener noreferrer"><span className={s.kr}>교육프로그램</span><span className={s.en}>EDUCATION PROGRAM</span><span className={s.arrow} aria-hidden="true">↗</span></a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}

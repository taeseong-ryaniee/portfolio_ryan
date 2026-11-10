import type { Metadata } from 'next';
import s from './contact.module.css';

export const metadata: Metadata = { title: '문의' };

export default function Contact() {
  return (
    <main className={`${s.contact} on-ink`}>
      <div className="container">
        <div className={s.grid}>
          <div>
            <h1 className={s.title}>문의</h1>
            <p className="eyebrow">CONTACT</p>
            <span className="thread" aria-hidden="true"><i></i><i></i><i></i></span>
            <ul className={s.list}>
              <li><a href="mailto:taeseong.culture@gmail.com">E-MAIL<span className={s.arrow} aria-hidden="true">↗</span></a></li>
              <li><a href="https://github.com/taeseong-ryaniee" target="_blank" rel="noopener noreferrer">GITHUB<span className={s.arrow} aria-hidden="true">↗</span></a></li>
              <li><a href="https://www.instagram.com/ryan_taeseong/" target="_blank" rel="noopener noreferrer">INSTAGRAM<span className={s.arrow} aria-hidden="true">↗</span></a></li>
            </ul>
          </div>
          <div className={s.sign} aria-hidden="true">
            <div className="signature">
              <svg className="mark" viewBox="0 0 200 273"><use href="#mark" /></svg>
              <span className="wordmark">AHOLIAB<b>.WORKS</b></span>
            </div>
            <span>오홀리압 웍스</span>
          </div>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import s from './contact.module.css';

export const metadata: Metadata = { title: '문의' };

export default function Contact() {
  return (
    <main className={s.contact}>
      <div className="container">
        <h1 className={s.title}>CONTACT</h1>
        <ul className={s.list}>
          <li><a href="mailto:taeseong.culture@gmail.com">E-MAIL</a></li>
          <li><a href="https://github.com/taeseong-ryaniee" target="_blank" rel="noopener noreferrer">GITHUB</a></li>
          <li><a href="https://www.instagram.com/ryan_taeseong/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
        </ul>
      </div>
    </main>
  );
}

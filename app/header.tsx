import Link from 'next/link';
import Nav from './nav';
import s from './header.module.css';

export default function Header() {
  return (
    <header>
      <div className={s.row}>
        <Link className={s.logo} href="/">AHOLIAB.WORKS</Link>
        <Nav className={s.gnb} />
      </div>
    </header>
  );
}

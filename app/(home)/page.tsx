import Header from '../header';
import s from './home.module.css';

// Original first screen markup from index.html at a9d56a8; nav targets now point at the subpages.
export default function Home() {
  return (
    <div className={s.wrap}>
      <Header />
      <div className={s.container}>
        <section className={s.main}>
          <div className={s.wrapper}>
            <div className={s.title}>
              <span>UI/UX DESIGN</span>
              <span>.portfolio</span>
            </div>
            <h1 className={s.name}>
              <span>Aholiab.WORKS</span>
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
}

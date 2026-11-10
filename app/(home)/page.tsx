import s from './home.module.css';

// Original first screen markup from index.html at a9d56a8; nav targets now point at the subpages.
export default function Home() {
  return (
    <div className={s.wrap}>
      <header>
        <div className={s.wrapper}>
          <div className={s.headerRow}>
            <h1 className={s.logo}><a href="/">로고</a></h1>
            <nav className={s.gnb}>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/director">Bio</a></li>
                <li><a href="/work">Project</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className={s.container}>
        <section className={s.main}>
          <div className={s.wrapper}>
            <div className={s.title}>
              <span>UI/UX DESIGN</span>
              <span>.portfolio</span>
            </div>
            <div className={s.name}>
              <span>Aholiab.WORKS</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

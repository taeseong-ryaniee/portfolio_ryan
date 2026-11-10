import type { Metadata } from 'next';
import { projects, type Project } from '../projects';
import s from './case.module.css';

type Params = { params: Promise<{ slug: string }> };
type CaseProject = Extract<Project, { kind: 'case' }>;
type Image = CaseProject['images']['full'];

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

// dynamicParams = false 라서 slug 는 항상 projects 안에 있다.
const find = (slug: string) => projects.find((p) => p.slug === slug)!;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return { title: find(slug).title };
}

function Img({ image, eager }: { image: Image; eager?: boolean }) {
  return <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading={eager ? 'eager' : 'lazy'} />;
}

function SiteLink({ site }: { site: string }) {
  return <a className={s.siteLink} href={site} target="_blank" rel="noopener noreferrer">사이트 바로가기</a>;
}

function Head({ p }: { p: Project }) {
  return (
    <div className={s.head}>
      <h1 className={s.title}>{p.title}</h1>
      <p className={s.en}>{p.en}</p>
      {p.site && <SiteLink site={p.site} />}
    </div>
  );
}

function Case({ p }: { p: CaseProject }) {
  return (
    <main className={`container ${s.page}`}>
      <p className={s.label}>{p.label}</p>
      <section className={s.visual}>
        <Head p={p} />
        <figure><Img image={p.images.hero} eager /></figure>
      </section>
      <section className={s.row}>
        <h2 className={s.rowLabel}>프로젝트 목적</h2>
        <ol className={s.purpose}>
          {p.purpose.map((item) => <li key={item}>{item}</li>)}
        </ol>
      </section>
      <section className={s.row}>
        <h2 className={s.rowLabel}>디자인 콘셉트</h2>
        <dl className={s.concept}>
          {p.concept.map(({ term, name, text }) => (
            <div className={s.conceptItem} key={term}>
              <dt>{term}</dt>
              <dd><strong>{name}</strong><p>{text}</p></dd>
            </div>
          ))}
          <div className={s.conceptItem}>
            <dt>주요색상</dt>
            <dd>
              <ul className={s.swatches}>
                {p.colors.map(({ hex, rgb }) => (
                  <li key={hex}>
                    <span className={s.swatch} style={{ background: hex }} aria-hidden="true" />
                    <span>HEX : {hex}<br />RGB : {rgb}</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div className={s.conceptItem}>
            <dt>폰트</dt>
            <dd className={s.fonts}>
              {p.fonts.map(({ name, note, className, rows }) => (
                <div key={name}>
                  <strong>{name}</strong>
                  {note && <p className={s.note}>{note}</p>}
                  {rows.map(({ label, weight, sample }) => (
                    <p className={`${s.specimenRow} ${s[className]}`} style={{ fontWeight: weight }} key={label}>
                      <span>{label}</span>
                      <span>{sample}</span>
                    </p>
                  ))}
                </div>
              ))}
            </dd>
          </div>
        </dl>
      </section>
      <section className={s.row}>
        <h2 className={s.rowLabel}>구현화면</h2>
        <div className={s.screens}>
          <figure><figcaption>웹</figcaption><Img image={p.images.web} /></figure>
          <figure><figcaption>{p.mobileCaption ?? '모바일'}</figcaption><Img image={p.images.mobile} /></figure>
        </div>
      </section>
    </main>
  );
}

function Full({ p }: { p: Extract<Project, { kind: 'full' }> }) {
  const shot = <Img image={p.images.full} eager />;
  return (
    <main className={`container ${s.page}`}>
      <p className={s.label}>{p.label}</p>
      <section className={s.visual}><Head p={p} /></section>
      <figure className={s.full}>
        {p.site ? <a href={p.site} target="_blank" rel="noopener noreferrer">{shot}</a> : shot}
      </figure>
    </main>
  );
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const p = find(slug);
  return p.kind === 'case' ? <Case p={p} /> : <Full p={p} />;
}

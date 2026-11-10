import type { Metadata } from 'next';
import Link from 'next/link';
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

function Crumb({ label }: { label: string }) {
  return (
    <p className={s.crumb}><Link href="/work">작업</Link><span aria-hidden="true">/</span><span>{label}</span></p>
  );
}

function SiteButton({ site }: { site: string }) {
  return (
    <a className="btn" href={site} target="_blank" rel="noopener noreferrer">사이트 바로가기 <span aria-hidden="true">↗</span></a>
  );
}

function Case({ p }: { p: CaseProject }) {
  return (
    <main>
      <section className={s.hero}>
        <div className="container">
          <Crumb label={p.label} />
          <div className={s.grid}>
            <div>
              <p className="eyebrow">WEB PUBLISHING</p>
              <h1 className={s.title}>{p.title}</h1>
              <p className={s.en}>{p.en}</p>
              <span className="thread" aria-hidden="true"><i></i><i></i><i></i></span>
              <SiteButton site={p.site} />
            </div>
            <figure className={s.visual}><Img image={p.images.hero} eager /></figure>
          </div>
        </div>
      </section>
      <div className={s.body}>
        <div className="container">
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
                <dd>
                  {p.fonts.map(({ name, note, className, rows }) => (
                    <div className={s.specimen} key={name}>
                      <p className={s.specimenName}>{name}</p>
                      {note && <p className={s.en}>{note}</p>}
                      {rows.map(({ label, weight, sample }) => (
                        <p className={s.specimenRow} key={label}>
                          <span>{label}</span>
                          <span className={`${s.sample} ${s[className]}`} style={{ fontWeight: weight }}>{sample}</span>
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
        </div>
      </div>
    </main>
  );
}

function Full({ p }: { p: Extract<Project, { kind: 'full' }> }) {
  const shot = <Img image={p.images.full} eager />;
  return (
    <main>
      <section className={`${s.hero} ${s.body}`}>
        <div className="container">
          <Crumb label={p.label} />
          <div className={s.head}>
            <p className="eyebrow">{p.site ? 'WEB PUBLISHING' : 'BRAND IDENTITY'}</p>
            <h1 className={s.title}>{p.title}</h1>
            <p className={s.en}>{p.en}</p>
            {p.site && <SiteButton site={p.site} />}
          </div>
          <figure className={s.full}>
            {p.site ? <a href={p.site} target="_blank" rel="noopener noreferrer">{shot}</a> : shot}
          </figure>
        </div>
      </section>
    </main>
  );
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const p = find(slug);
  return p.kind === 'case' ? <Case p={p} /> : <Full p={p} />;
}

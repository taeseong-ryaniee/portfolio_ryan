import type { Metadata } from 'next';
import s from './director.module.css';

export const metadata: Metadata = { title: '디렉터 소개' };

const careers = [
  {
    kr: '청주시문화산업진흥재단',
    en: 'CHEONGJU CULTURAL INDUSTRY PROMOTION FOUNDATION',
    projects: [
      { kr: '충북글로벌게임센터', en: 'CHEONGBUK GLOBAL GAME CENTER', info: '홍보(홈페이지), 충북게임잼 프로그램기획 및 운영, 디렉토리북 제작', year: '2021 - 2023' },
      { kr: '청주시한국공예관', en: 'KOREA CRAFT MUSEUM', info: '공예 스튜디오 운영, 미술관 교육프로그램 기획 및 운영(공모사업 포함 및 랜딩페이지 기획)', year: '2019 - 2021' },
      { kr: '동부창고', en: 'DONG-BU CHANG GO', info: '홈페이지 제작 기획, 생활문화 프로그램 운영, 동부창고 6, 8동(카페 C 포함) 개관 업무 진행', year: '2019' },
    ],
  },
  {
    kr: '토탈미술관',
    en: 'TOTAL MUSEUM OF CONTEMPORARY ART',
    projects: [
      { kr: '코디네이터, 어시스턴트 큐레이터', en: 'Coordinator, Assistant Curator', info: '전시기획 및 교육프로그램 운영, SNS 관리, 홈페이지 리뉴얼 관리', year: '2016 - 2018' },
    ],
  },
];

export default function Director() {
  return (
    <main>
      <h1 className="sr-only">디렉터 소개</h1>
      <section className={s.bio}>
        <div className={`container ${s.bioRow}`}>
          <div className={s.portrait}>
            <img src="/images/portrait.png" alt="이태성 사진" width={519} height={675} />
            <p className={s.names}><span className={s.kr}>이태성</span><span>TaeSeong Ryan YI</span></p>
            <p>b.1989</p>
          </div>
          <div className={s.introduce}>
            <h2 className={s.quote}><em>GOOD DESIGN<br /></em>makes a product <em>UNDERSTANDABLE</em></h2>
            <p className={s.author}>Dieter RAMS (1932 - )</p>
            <p className={s.text}>모든 것은 목적을 가지고 만들어집니다<br />
              원래 가지고 있던 고유의 의미를 효과적으로 전달하는 것이 중요합니다.<br />
              그래서 우리는 늘 고민합니다.<br />
              작업의 방향성이 올바른지, 보는 사람들 역시 우리와 같은 관점으로 바라보고 있는지</p>
            <p className={s.text}>올바른 방향을 가지고 일하기, 그 안에서 답을 찾기 위해 노력하겠습니다</p>
          </div>
        </div>
      </section>

      <section className={s.career}>
        <div className="container">
          <h2 className={s.careerTitle}>WORK EXPERIENCE</h2>
          {careers.map((org) => (
            <div className={s.org} key={org.kr}>
              <div className={s.company}>
                <h3>{org.kr}</h3>
                <p>{org.en}</p>
              </div>
              <ul className={s.projects}>
                {org.projects.map((p) => (
                  <li key={p.kr}>
                    <p className={s.projectTitle}>{p.kr}<em>{p.en}</em></p>
                    <p className={s.info}>{p.info}</p>
                    <span className={s.year}>{p.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

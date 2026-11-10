import type { Metadata } from 'next';
import s from './director.module.css';

export const metadata: Metadata = { title: '디렉터 소개' };

export default function Director() {
  return (
    <main className={s.director}>
      <div className="container">
        <h1 className="section-title">디렉터 소개</h1>
        <p className="eyebrow">DIRECTOR INFO</p>
        <div className={s.grid}>
          <div className={s.idCard}>
            <div className={s.idBody}>
              <span className="wordmark">AHOLIAB<b>.WORKS</b></span>
              <p className={s.idName}>이태성</p>
              <p className={s.idEn}>TaeSeong Ryan YI</p>
              <p className={s.idMeta}>b.1989</p>
              <span className="thread" aria-hidden="true"><i></i><i></i><i></i></span>
            </div>
            <p className={s.idRole}>DIRECTOR</p>
          </div>
          <div>
            <h2 className={s.quote}><em>GOOD DESIGN<br /></em>makes a product <em>UNDERSTANDABLE</em></h2>
            <span className={s.author}>Dieter RAMS (1932 - )</span>
            <p className={s.intro}>모든 것은 목적을 가지고 만들어집니다<br />
              원래 가지고 있던 고유의 의미를 효과적으로 전달하는 것이 중요합니다.<br />
              그래서 우리는 늘 고민합니다.<br />
              작업의 방향성이 올바른지, 보는 사람들 역시 우리와 같은 관점으로 바라보고 있는지</p>
            <p className={s.intro}>올바른 방향을 가지고 일하기, 그 안에서 답을 찾기 위해 노력하겠습니다</p>

            <div className={s.career}>
              <h2 className={s.careerTitle}>경력 <span>WORK EXPERIENCE</span></h2>
              <div className={s.org}>
                <h3>청주시문화산업진흥재단 <span>CHEONGJU CULTURAL INDUSTRY PROMOTION FOUNDATION</span></h3>
                <ul>
                  <li>
                    <span className={s.year}>2021 – 2023</span>
                    <div>
                      <strong>충북글로벌게임센터</strong><em>CHEONGBUK GLOBAL GAME CENTER</em>
                      <p>홍보(홈페이지), 충북게임잼 프로그램기획 및 운영, 디렉토리북 제작</p>
                    </div>
                  </li>
                  <li>
                    <span className={s.year}>2019 – 2021</span>
                    <div>
                      <strong>청주시한국공예관</strong><em>KOREA CRAFT MUSEUM</em>
                      <p>공예 스튜디오 운영, 미술관 교육프로그램 기획 및 운영(공모사업 포함 및 랜딩페이지 기획)</p>
                    </div>
                  </li>
                  <li>
                    <span className={s.year}>2019</span>
                    <div>
                      <strong>동부창고</strong><em>DONG-BU CHANG GO</em>
                      <p>홈페이지 제작 기획, 생활문화 프로그램 운영, 동부창고 6, 8동(카페 C 포함) 개관 업무 진행</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={s.org}>
                <h3>토탈미술관 <span>TOTAL MUSEUM OF CONTEMPORARY ART</span></h3>
                <ul>
                  <li>
                    <span className={s.year}>2016 – 2018</span>
                    <div>
                      <strong>코디네이터, 어시스턴트 큐레이터</strong><em>Coordinator, Assistant Curator</em>
                      <p>전시기획 및 교육프로그램 운영, SNS 관리, 홈페이지 리뉴얼 관리</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

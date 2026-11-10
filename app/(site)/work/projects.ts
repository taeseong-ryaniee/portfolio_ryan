type Image = { src: string; alt: string; width: number; height: number };

type CaseData = {
  label: string;
  title: string;
  en: string;
  site: string;
  mobileCaption?: string;
  images: { hero: Image; web: Image; mobile: Image; full: Image };
  purpose: string[];
  concept: { term: string; name: string; text: string }[];
  colors: { hex: string; rgb: string }[];
  // case.module.css 의 서체 클래스 이름
  fonts: { name: string; note?: string; className: 'ffMontserrat' | 'ffSuite' | 'ffGowun'; rows: { label: string; weight: number; sample: string }[] }[];
};

export type Project =
  | ({ slug: string; kind: 'case' } & CaseData)
  | { slug: string; kind: 'full'; label: string; title: string; en: string; site?: string; images: { full: Image } };

const web01: CaseData = {
  label: 'Web Publishing #01',
  title: '토탈미술관',
  en: 'TOTAL MUSEUM OF CONTEMPORARY ART',
  site: 'https://fancy-macaron-ebc25d.netlify.app/',
  images: {
    hero: { src: '/images/project01_01.png', alt: '토탈미술관 전시 목업', width: 775, height: 501 },
    web: { src: '/images/totalmuseum_web.png', alt: '토탈뮤지엄 데스크탑', width: 1080, height: 1727 },
    mobile: { src: '/images/totalmuseum_mob.png', alt: '토탈뮤지엄 모바일', width: 560, height: 2013 },
    full: { src: '/images/web01.png', alt: '토탈미술관', width: 1920, height: 4777 },
  },
  purpose: [
    '주이용자들의 목적에 부합하도록 미술관의 전시 정보에 관한 접근성 강조',
    '미술관이 가지고 있는 콘텐츠를 성격에 맞게 분류하여 보여줌으로써, 이용자들이 찾는 콘텐츠에 집중할 수 있도록 함',
  ],
  concept: [
    {
      term: '모티브',
      name: '건축',
      text: '토탈미술관은 설립자 문신규 건축가가 설계한 건물로 1993년 올해의 건축상에 선정될 정도로 건물의 조형미가 드러나는 것이 주요 특징이다 이를 모티브로 삼고 건축물에 주로 사용 되는 선 요소를 디자인에서 적극적으로 활용하였으며, 폰트 역시 바우하우스 시대에 주로 사용하였던 FUTURA계열의 폰트를 이용하여 홈페이지를 구성하였다',
    },
    {
      term: '레이아웃',
      name: '그리드',
      text: '건축적 요소 이외에도 미술관 웹사이트를 디자인 콘텐츠로 구성된 가상의 전시공간으로 인식하고 포스터나 웹배너등이 전시장에 걸려있는 듯한 느낌을 주기 위해 그리드 디자인 구성',
    },
  ],
  colors: [
    { hex: '#2B2B2B', rgb: '43, 43, 43' },
    { hex: '#FBFBFB', rgb: '251, 251, 251' },
  ],
  fonts: [
    {
      name: 'Neuzeit Grotesk',
      note: '웹 표시: 유사 서체 Montserrat',
      className: 'ffMontserrat',
      rows: [
        { label: 'BOLD', weight: 700, sample: 'Total Museum of Contemporary Art, SEOUL' },
        { label: 'Regular', weight: 400, sample: 'Total Museum of Contemporary Art, SEOUL' },
      ],
    },
    {
      name: 'SUITE',
      className: 'ffSuite',
      rows: [{ label: 'Regular', weight: 400, sample: '토탈미술관은 대한민국 1호 사립미술관입니다.' }],
    },
  ],
};

const gowunSample = '소금은 좋은 것이나 소금도 그맛을 잃으면 무엇으로 짜게 하리오';
const web02: CaseData = {
  label: 'Web Publishing #02',
  title: '전주 맛있는교회',
  en: 'TASTY CHURCH, JEON-JU',
  site: 'https://steady-unicorn-b3f8a2.netlify.app/',
  images: {
    hero: { src: '/images/project02.png', alt: '맛있는교회 목업', width: 775, height: 502 },
    web: { src: '/images/tastychruch_web.png', alt: '맛있는교회 데스크탑', width: 1080, height: 2477 },
    mobile: { src: '/images/tastychruch_mob.png', alt: '맛있는교회 모바일', width: 560, height: 2401 },
    full: { src: '/images/web02.png', alt: '전주맛있는교회', width: 1920, height: 5299 },
  },
  purpose: [
    '주 이용자는 정착할 교회를 찾는 온라인 예배 참석자들로 설정하고 이용자들의 수요와 요구를 고려하여 교회의 추구하는 방향성 이해도를 높일 수 있도록 구현',
    '불필요한 메뉴를 줄이고  단순화하여 이용자들의 접근성을 높임',
  ],
  concept: [
    {
      term: '모티브',
      name: '청첩장',
      text: '종교 사이트 특성상 고결한 분위기를 연출하는 것을 주요 포인트로 설정, 우리가 일상속에서 쉽게 접할 수 있는 디자인 콘텐츠 중 유사한 분위기를 가진 청첩장을 모티브로 하였으며, 이에 수채화적인 요소를 많이 가미하였다 따뜻한 분위기를 연출하기 위해 고딕계열의 서체가 아닌 명조체를 선택하고, FADE 애니메이션을 넣었다.',
    },
    {
      term: '미니멀리즘',
      name: '그리드',
      text: '콘텐츠를 적게 배치하고 여백을 많이 줌으로써 콘텐츠 집중도를 높일 수 있도록 레이아웃을 구성함',
    },
  ],
  colors: [
    { hex: '#3B3B3B', rgb: '59, 59, 59' },
    { hex: '#F4F4F4', rgb: '244, 244, 244' },
  ],
  fonts: [
    {
      name: '고운바탕',
      className: 'ffGowun',
      rows: [
        { label: 'BOLD', weight: 700, sample: gowunSample },
        { label: 'Regular', weight: 400, sample: gowunSample },
      ],
    },
  ],
};

const suiteSample = '예술경영지원센터는 미술시장 진흥과 발전을 위해 노력하는 예술경영 전문기관입니다';
const web03: CaseData = {
  label: 'Web Publishing #03',
  title: '예술경영지원센터',
  en: 'Korea Art Management Service(KAMS)',
  site: 'https://ryan-port-kams.netlify.app/',
  mobileCaption: '모바일(디자인만 구현)',
  images: {
    hero: { src: '/images/project03.png', alt: '예술경영지원센터 목업', width: 699, height: 458 },
    web: { src: '/images/KAMS_web.png', alt: '예술경영지원센터 데스크탑', width: 1080, height: 3116 },
    mobile: { src: '/images/KAMS_mob.png', alt: '예술경영지원센터 모바일', width: 560, height: 2442 },
    full: { src: '/images/web03.png', alt: '예술경영지원센터', width: 1920, height: 5763 },
  },
  purpose: [
    '주 이용자들은 문화예술분야의 종사자로서 공모사업이나 교육 일정을 보는 것이 주 목적이라는 사실에 중점을 두고 사이트를 구성함',
    '로고가 가지고 있는 녹색계열을 적극적으로 활용하여 디자인을 구현',
  ],
  concept: [
    {
      term: '모티브',
      name: '구인구직 사이트',
      text: '예술경영지원센터는 예술관련 지원을 위한 공모를 진행하고, 관련된 교육 사업을 진행하고 있음, 또한 타기관에서 진행하는 공모사업이나 채용정보를 업로드 하여 관련 정보 취득을 위해서 분야 종사자들이 많이 접속하는 사이트 중 하나임 공지사항이나 문화예술 소식 등의 게시판 내용들을 우선순위로 선정하고 사이트를 구성함',
    },
    {
      term: '레이아웃',
      name: '카드 뉴스 디자인',
      text: '콘텐츠를 적게 배치하고 여백을 많이 줌으로써 콘텐츠 집중도를 높일 수 있도록 레이아웃을 구성함',
    },
  ],
  colors: [
    { hex: '#2B2B2B', rgb: '43, 43, 43' },
    { hex: '#003831', rgb: '0, 56, 49' },
  ],
  fonts: [
    {
      name: 'SUITE',
      className: 'ffSuite',
      rows: [
        { label: 'BOLD', weight: 700, sample: suiteSample },
        { label: 'Regular', weight: 400, sample: suiteSample },
        { label: 'Light', weight: 300, sample: suiteSample },
      ],
    },
  ],
};

const podcast: Project = {
  slug: 'podcast',
  kind: 'full',
  label: 'Brand Identity',
  title: '산만이들의 밤(팟캐스트)',
  en: 'NIGHT OF DISTRACTED PEOPLE(PODCAST)',
  images: {
    full: { src: '/images/contents01.png', alt: '산만이들의밤', width: 1920, height: 5220 },
  },
};

const full = (slug: string, { label, title, en, site, images }: CaseData): Project => ({
  slug: slug + '-full',
  kind: 'full',
  label,
  title,
  en,
  site,
  images: { full: images.full },
});

export const projects: Project[] = [
  { slug: 'web01', kind: 'case', ...web01 },
  { slug: 'web02', kind: 'case', ...web02 },
  { slug: 'web03', kind: 'case', ...web03 },
  full('web01', web01),
  full('web02', web02),
  { ...full('web03', web03), site: 'https://ryan-port-kams.netlify.app' },
  podcast,
];

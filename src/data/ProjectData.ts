export const GitGoProject = {
  isImportant: true,
  title: "git-go",
  subTitle: "2025.05.07 - 2025.06.05 (4인 프로젝트 / 팀원)",
  desc: "개발자가 자신의 커밋과 PR을 기반으로 자연스럽게 회고를 작성하고, 기록할 수 있도록 돕는 개인 회고 기록 서비스",
  url: "https://git-go.co.kr",
  github: "https://github.com/FRONT-END-BOOTCAMP-PLUS-4/git-go",
  skills: "Next.js, Typescript, Tailwind.css, Zustand, Prisma, plate-editor",
  role: [
    "회고록 작성, 수정, 조회 기능의 UI 전반을 구현했습니다.",
    "plate-editor를 기반으로 회고 에디터를 커스터마이징하고 주요 작성 기능을 담당했습니다.",
    "다크 모드를 지원하기 위해 CSS 변수 기반의 테마 전환 기능을 구현했습니다.",
    "회고록 작성, 수정, 삭제 API의 프론트엔드와 백엔드를 모두 구현했으며, 백엔드는 클린 아키텍처 구조로 작성했습니다.",
    "plate-editor에서 이미지 업로드 시 AWS S3 스토리지에 저장되는 기능을 구현했습니다.",
    "프로젝트 전체에 일관된 폰트를 적용하여 UI 완성도를 높였습니다.",
  ],
  problem: [
    "에디터를 선택하는 과정에서 여러 라이브러리(tiptap, react-md-editor, plate.js)를 비교해야 했고, 각 라이브러리마다 커스텀 난이도, 화면 배치, 마크다운 지원 여부 등의 차이가 있어 판단이 어려웠습니다.",
    "처음 plate-editor를 사용할 때 Slate 기반 구조와 플러그인 체계가 익숙하지 않아 원하는 기능 구현에 시간이 걸렸습니다.",
    "기획 단계에서 다크 모드를 고려하지 않았지만, 프로젝트 중반 이후에 도입하게 되며 기존 스타일 구조와 충돌이 발생했습니다.",
  ],
  solve: [
    "마크다운 지원, 공간 효율성, UI 심플함 등의 기준을 바탕으로 세 가지 에디터를 테스트해본 후 plate.js를 최종 선택했습니다. 공식 문서의 완성도와 커스터마이징 용이성을 종합적으로 고려했습니다.",
    "plate-editor를 미니 프로젝트에서 먼저 실험해보며 플러그인 구조, editor.children 접근 방식 등을 익히고, 이미지 업로드, 툴바 커스터마이징 기능을 점진적으로 구현했습니다.",
    "기존 Tailwind 구조를 유지하면서도 CSS 변수를 통해 light/dark 모드를 유연하게 전환할 수 있도록 전체 스타일을 리팩터링했습니다.",
  ],
  review: [
    "UI 구현부터 editor 커스터마이징, 백엔드 API 구성까지 다양한 영역을 직접 맡아보며 프로젝트의 핵심 기능을 깊이 있게 다뤄볼 수 있었습니다.",
    "특히 에디터 도입 전 여러 라이브러리를 비교하고, 커스터마이징을 직접 시도해보며 도구 선택과 설계 능력이 향상되었습니다.",
    "다크 모드, S3 이미지 업로드 등 세부적인 사용자 경험을 향상시키기 위한 작업을 통해 프론트엔드 개발자로서의 완성도를 높일 수 있었습니다.",
  ],
  hasImage: false,
};

export const MoChaProject = {
  isImportant: true,
  title: "MoCha",
  subTitle: "2025.04.07 - 2025.04.28 (3인 프로젝트 / 팀장)",
  desc: "수입과 지출을 기록하고 월간 소비 패턴을 시각화할 수 있는 웹 기반 가계부 서비스입니다.",
  github: "https://github.com/FRONT-END-BOOTCAMP-PLUS-4/MoCha",
  skills: "Next.js, Typescript, Tailwind.css, Zustand, Supabase, OAuth, jwt",
  role: [
    "로그인/회원가입, 아이디 찾기, 비밀번호 재설정 기능의 프론트엔드 및 백엔드 전체를 전담했습니다.",
    "Supabase를 DB로 활용하고, 인증은 Supabase Auth 대신 커스텀 방식으로 구현했습니다.",
    "이메일 인증은 Nodemailer를 활용해 직접 인증번호를 발송하고, 인증 완료 후 회원가입을 진행하도록 구현했습니다.",
    "Google, Kakao 소셜 로그인 기능을 OAuth 2.0 기반으로 구현하고, accessToken 발급 및 저장 로직을 구성했습니다.",
    "백엔드는 클린 아키텍처를 적용하여 인증 관련 API를 구조적으로 설계하고 구현했습니다.",
  ],
  problem: [
    "Supabase Auth를 사용하지 않고 자체 인증 로직을 구현하다 보니, 인증 흐름 설계와 보안 고려 사항에 대한 부담이 컸습니다.",
    "소셜 로그인에서 OAuth 2.0의 redirect 흐름, JWT 발급 및 토큰 관리 방식에 대해 명확히 이해하지 못해 처음에 많은 시행착오를 겪었습니다.",
    "accessToken과 refreshToken의 역할과 만료 처리, 재발급 흐름이 복잡하게 느껴졌고, 이를 클린 아키텍처 구조에 녹여내는 과정에서 어려움이 있었습니다.",
  ],
  solve: [
    "Supabase는 사용자 관리 대신 데이터 저장 용도로만 활용하고, 인증은 자체 구현 방식으로 전환하여 구조적 일관성을 확보했습니다.",
    "OAuth 2.0 공식 문서와 다양한 블로그를 참고하며 redirect_uri, authorization code flow, accessToken 관리 개념을 정리하고 적용했습니다.",
    "JWT 기반 인증 플로우를 구성하며 accessToken 검증과 상태 관리 로직을 구현했고, refreshToken은 개념적으로 이해했으나 실제 적용은 추후 과제로 남겨두었습니다.",
  ],
  review: [
    "직접 회원가입 및 소셜 로그인 전체 흐름을 구현해보며 인증 시스템에 대한 전반적인 이해도를 높일 수 있었습니다.",
    "프론트엔드와 백엔드를 모두 다뤄보면서 클린 아키텍처의 실질적인 이점을 체감했고, 구조적인 코드 작성 습관을 익힐 수 있었습니다.",
    "accessToken 처리, 인증 이메일 구현 등 실제 서비스에 필요한 기능들을 직접 구성하며 자신감을 얻었고, refreshToken은 이번에 적용하지 못했지만 다음 프로젝트에서는 꼭 도전해보고 싶습니다.",
  ],
  hasImage: false,
};

export const ArtLogProject = {
  isImportant: false,
  title: "전시 정보 제공 및 전시 관람 기록 서비스",
  subTitle: "2025.02 - 진행중 (4인 프로젝트 / 팀원)",
  desc: "사용자가 관람한 전시를 기록하고, 특정 조건 달성 시 뱃지를 수집하는 재미를 더한 기록형 서비스",
  // url: "https://art-log.vercel.app",
  // github: "https://github.com/Defor721/ArtLog",
  skills: "Next.js, Typescript, Tailwind.css, Zustand, React-query",
  role: [
    "현재 프론트엔드 개발자로 프로젝트에 참여 중입니다.",
    "피그마 디자인을 참고해 UI를 거의 완성했고, 기능 구현 함수를 추가하는 작업을 진행 중입니다.",
    "디자이너와 소통하며 UI/UX를 조율하고 세부 디테일을 다듬고 있습니다.",
    "백엔드 개발자와 협력하여 API 연동에 필요한 데이터 스펙을 확인하고 전달하며 통합 테스트를 진행 중입니다.백엔드 개발자와 협력하여 API 연동에 필요한 데이터 스펙을 확인하고 전달하며 통합 테스트를 진행 중입니다.",
    "이번 프로젝트에서는 shadcn UI를 사용하지 않고 디자이너가 제공한 시안을 기준으로 공통 컴포넌트를 직접 설계 및 구현하며 일관된 디자인 시스템을 구축했습니다.",
  ],
  problem: [
    "공공데이터포털에서 전시 관련 API를 연동하는 과정에서 데이터가 XML 데이터로 제공되었습니다. 또한 일부 필드에 값이 비어있는 데이터가 포함되어 있었습니다.",
    "팀원 한 명이 중도 취업으로 이탈하였습니다.",
  ],
  solve: [
    "백엔드 개발자와 상의해 XML 데이터를 JSON 형태로 변환하고 필요한 데이터를 필터링하도록 개선했습니다.",
    "비어 있는 값들은 데이터베이스 단계에서 제거해 클린 데이터를 받을 수 있도록 조치했습니다.",
    "팀원 이탈 이후에는 역할과 작업 일정을 다시 조정하고 진행 중에 있습니다.",
  ],
  review: [
    "아직 프로젝트가 진행 중이지만, 디자이너와의 협업을 통해 피그마 완성본을 기준으로 UI를 제작하니 개발 효율성이 높아졌습니다.",
    "공통 컴포넌트를 직접 만들면서 디자인 시스템에 대한 이해도와 구현 능력을 키울 수 있었습니다.",
  ],
  hasImage: false,
};

export const PortfolioProject = {
  isImportant: false,
  title: "포트폴리오 웹사이트 (App router)",
  subTitle: "2025.01 (1인 프로젝트)",
  desc: "기존 Page Router 기반 프로젝트를 App Router로 마이그레이션해 유지보수성을 높이고, 개인 포트폴리오 사이트의 구조와 가독성을 개선",
  url: "https://portfolio-five-beryl-94.vercel.app/",
  github: "https://github.com/yoonstar1996/portfolio",
  skills: "Next.js, Typescript, Tailwind.css, Zustand",
  role: [
    "Page Router를 App Router 기반으로 전환하며 폴더 구조와 라우팅 방식을 최적화했습니다.",
    "프로젝트 소개, 기술 스택, 경험 등을 한눈에 볼 수 있는 UI를 구축했으며, README와 이미지 클릭 시 각각 마크다운과 캐러셀로 보이도록 기능을 추가했습니다.",
    "반응형 CSS를 적용해 모든 디바이스에서 깔끔한 뷰를 제공하도록 구현했습니다.",
  ],
  problem: [
    "기존 구조와 App Router 방식의 차이로 인해 일부 경로 처리를 수정해야 했습니다.",
    "UI/UX 관련 피드백을 받아 디자인 완성도를 높여야 하는 과제가 있었습니다.",
  ],
  solve: [
    "App Router 구조에 맞게 폴더와 파일을 정리하고, 라우팅 경로를 수정해 문제를 해결했습니다.",
    "동료 의견을 바탕으로 전체적인 레이아웃과 이미지들을 조정해 반영했습니다.",
  ],
  review: [
    "구조적으로 안정적이고 유지보수가 쉬운 포트폴리오 페이지를 만들었으며, 디자인적인 디테일을 더 다듬어 완성도를 높일 수 있었습니다.",
  ],
  hasImage: false,
};

export const WattsUpProject = {
  isImportant: true,
  title: "VPP 대시보드 구축 및 전력 거래 시스템 구축",
  subTitle: "2024.12 ~ 2025.01 (5인 프로젝트 / 팀장)",
  desc: "분산형 재생에너지 발전소 데이터를 기반으로 전력 거래 시뮬레이션 및 머신러닝 예측 모델을 통한 전력량 예측과 데이터 시각화 제공",
  url: "https://watts-up-five.vercel.app/",
  github: "https://github.com/yoonstar1996/WattsUp",
  skills: "Next.js, Typescript, Tailwind.css, Zustand, tensorflow.js, recharts",
  role: [
    "프로젝트의 팀장을 맡아 일정 관리와 역할 분배를 주도했습니다.",
    "TensorFlow.js를 활용해 태양광 발전량 예측 모델을 구현했고, 표준화 및 역표준화 로직을 적용해 모델의 정확도를 높였습니다.",
    "Recharts를 이용해 데이터를 시각화했으며, Zustand를 적용해 상태 관리 구조를 정리했습니다.",
    "회원 리스트 및 거래 내역 페이지네이션을 포함한 관리자 페이지를 개발했습니다.",
    "전체 반응형 UI와 다크 모드 환경을 구축했습니다.",
  ],
  problem: [
    "프로젝트를 위해 머신러닝 개념을 처음 접하게 되었고, TensorFlow.js 라이브러리를 실제 프로젝트에 적용하는 데 어려움이 많았습니다.",
    "특히 독립변수와 종속변수 간의 단위 차이로 인해 머신러닝 모델이 제대로 학습되지 않는 문제를 겪었습니다.",
  ],
  solve: [
    "생활코딩 머신러닝, Tensorflow.js기초 강의를 통해 기본 개념을 빠르게 익혔습니다.",
    "멘토님의 피드백을 통해 표준화/역표준화 개념을 이해하고 적용하여 모델 정확도 및 예측 결과를 향상 시켰습니다.",
  ],
  review: [
    "머신러닝 예측 모델과 시각화 기능이 포함된 VPP 대시보드를 완성했습니다. 단순한 프론트엔드 개발을 넘어 머신러닝과 데이터 처리까지 경험하며 역량을 넓힐 수 있었습니다.",
    "어려움을 해결하는 과정에서 필요한 정보를 직접 찾고 학습하면서 성장을 체감했습니다. 협업 과정에서는 적극적으로 소통하며 팀의 문제를 함께 해결하는 법을 배웠습니다.",
    "이러한 노력 덕분에 프로젝트는 최우수팀으로 선정되는 결과를 얻었습니다.",
  ],
  hasImage: true,
  imgSrc: [
    "/projects/wattsup/dashboard.png",
    "/projects/wattsup/dashboard-dark.png",
    "/projects/wattsup/user-info.png",
    "/projects/wattsup/data-info.png",
  ],
};

export const PortfolioDemoProject = {
  isImportant: false,
  title: "포트폴리오 웹사이트 (Page router)",
  subTitle: "2023.11 ~ 2023.12 (1인 프로젝트)",
  desc: "자신이 진행한 프로젝트 및 기술 스택을 한눈에 볼 수 있도록 정리하고, 마크다운 형식으로 상세 내용을 확인할 수 있는 페이지 제작",
  url: "https://portfolio-tau-lime-32.vercel.app",
  github: "https://github.com/yoonstar1996/portfolio-demo",
  skills: "Next.js, TypeScript, styled-components",
  role: [
    "Next.js와 TypeScript를 기반으로 프로젝트 소개, 인적사항, 기술 스택을 시각적으로 보기 좋게 정리했습니다.",
  ],
  problem: [],
  solve: [],
  review: [
    "간결하지만 읽기 편한 포트폴리오 페이지를 제작하면서 정보 구조화와 시각적 전달력의 중요성을 다시 한번 배웠습니다.",
  ],
  hasImage: false,
};

export const CelebstarsProject = {
  isImportant: true,
  title: "모델 구인구직 플랫폼 개발",
  subTitle: "2023.03 ~ 2023.08 (3인 프로젝트 / 인턴)",
  desc: "모델과 기업을 연결하는 플랫폼으로, 프로필 관리, 캐스팅, 지원자 관리 등 실질적인 구인·구직 기능 제공",
  url: "https://celebstars.co.kr",
  // github: "https://github.com/yoonstar1996/celebstars",
  skills: "Next.js, Typescript, Redux, styled-components",
  role: [
    "5개월간 프론트엔드 인턴으로 참여하며 실무 프로젝트에 기여했습니다.",
    "Next.js와 TypeScript를 기반으로 SSR 페이지를 구축해 안정적인 데이터 렌더링을 구현했습니다.",
    "프로필 등록 및 수정 기능을 개발하면서 이미지 슬라이더(Swiper)와 크롭 기능(react-cropper)을 적용해 사용자 편의성을 높였습니다.",
    "다크모드/라이트모드 전환 기능을 도입해 다양한 환경에서도 일관된 사용자 경험을 제공했습니다.",
    "대량 데이터를 다루는 검색 및 필터링 기능을 최적화하여 성능 저하 없이 구현했습니다.",
    "기업 회원을 위한 대시보드 및 지원자 관리 페이지를 개발하며 관리 효율성을 높였습니다.",
  ],
  problem: [
    "로그인 및 회원가입 기능을 구현하면서, OAuth 기반 소셜 로그인과 관련해 accessToken, refreshToken 관리 방식에 대한 개념이 부족해 기능 구현을 주도적으로 맡지 못했습니다. 당시에는 백엔드 개발 영역이라고만 판단해 학습 없이 넘겨버린 아쉬움이 있습니다.",
    "다른 인턴 개발자와 각자 기능을 나눠 개발하던 중, Figma 디자인을 참고했음에도 margin, padding, 폰트 크기, border-radius 등 디테일 요소가 제각각 구현되어 전체 UI의 통일성이 떨어지는 문제가 발생했습니다.",
    "프로젝트 도중 한 구성원의 개인적인 사정으로 개발 진행이 약 2개월간 중단되며, 전체 일정과 우선순위 재정비가 필요했습니다.",
  ],
  solve: [
    "소셜 로그인 구현 경험 부족에 대해서는 기능 구현 후 별도로 OAuth 흐름과 토큰 관리 방식에 대해 학습하고, 이후 진행한 프로젝트에서 이를 반영하며 성장의 계기로 삼았습니다. 이후에는 프론트엔드 개발자도 인증/인가 로직을 충분히 이해하고 있어야 한다는 교훈을 얻었습니다.",
    "UI 구성의 통일성을 위해 이후 기능을 개발할 때는 다른 개발자와 지속적으로 소통하며, 특정 컴포넌트 스타일은 공통 변수 또는 공통 컴포넌트로 분리하여 재사용성을 높이고 일관성을 유지하는 방향으로 개선했습니다.",
    "프로젝트 중단 상황에서는 기존 작업을 스스로 점검하고, 남은 작업을 재정리해 우선순위를 설정한 뒤 작업 계획을 세웠습니다. 프로젝트가 재개된 후에는 이 계획에 따라 차근차근 진행하면서 일정에 대한 압박 없이 최종 배포까지 안정적으로 마무리할 수 있었습니다.",
  ],
  review: [
    "실무 프로젝트에 참여하며 서비스의 실제 사용자 입장에서 UI/UX를 고려하는 법을 배웠습니다. 협업 과정에서 기획자와 디자이너, 백엔드 개발자와의 소통이 프로젝트의 완성도를 높인다는 것을 체감했고, 이를 통해 커뮤니케이션 능력 또한 성장할 수 있었습니다.",
    "실제 플랫폼에 제가 구현한 기능이 적용되는 것을 보며 큰 성취감을 느낄 수 있었습니다.",
  ],
  hasImage: false,
};

export const DingonProject = {
  isImportant: false,
  title: "Dingon",
  subTitle: "2022.10 ~ 2022.10 (5인 프로젝트 / 팀원)",
  desc: "사용자들이 자유롭게 글을 작성하고 피드백을 주고받을 수 있는 커뮤니티 서비스 구축",
  github: "https://github.com/yoonstar1996/dingon/tree/main",
  skills: "React, axios, mui, Node.js, express",
  role: [
    "React를 활용해 커뮤니티 서비스의 전반적인 UI 및 기능을 구현했습니다.",
    "로그인 상태에 따라 UI 요소가 동적으로 변화하도록 삼항 연산자와 상태 관리로 처리했습니다.",
    "REST API를 활용해 백엔드와 통신하며 게시글 데이터의 조회, 작성, 수정 기능을 구현했고, 반응형 웹 페이지로 제작해 다양한 기기에서 원활한 사용성을 제공했습니다.",
  ],
  problem: [
    "React에 대한 개념이 잘 잡히지 않은 상태에서 프로젝트를 시작해 전반적인 진행이 어렵게 느껴졌습니다.",
  ],
  solve: [
    "프로젝트 진행 중 공식 문서와 인터넷 강의를 참고해 React의 개념과 사용법을 빠르게 학습했습니다.",
    "필요한 부분은 팀원들과 적극적으로 소통하며 피드백을 받아가며 구현했고, 결과적으로 맡은 분량을 완수할 수 있었습니다.",
  ],
  review: [
    "React와 REST API의 연결과 비동기 처리 경험을 통해 프론트엔드-백엔드 연동의 중요성을 배웠습니다.",
    "사용자 편의성을 고려해 UI를 동적으로 변경하는 로직 작성 능력을 키웠습니다.",
  ],
  hasImage: true,
  imgSrc: [
    "/projects/dingon/dingon_login.gif",
    "/projects/dingon/dingon_mypage.gif",
    "/projects/dingon/dingon_allgall.gif",
  ],
};

export const SgtProject = {
  isImportant: false,
  title: "SGT Market",
  subTitle: "2022.09 ~ 2022.10 (4인 프로젝트 / 팀원)",
  desc: "사용자가 중고 물품을 자유롭게 등록, 검색, 거래할 수 있는 웹 서비스 개발",
  github: "https://github.com/yoonstar1996/kdt--2project",
  skills: "Javascript, jQuery, axios, Node.js, express",
  role: [
    "프론트엔드 파트로 참여해 중고 물품 등록 및 거래 관련 UI를 구현했습니다.",
    "REST API를 통해 백엔드와 연동해 게시글 등록, 수정, 삭제 기능을 구현했습니다.",
    "다음 우편번호 API를 연동해 주소 입력 과정을 간편화했습니다.",
    "반응형 웹 디자인을 적용해 모바일과 PC에서 모두 편리하게 사용할 수 있도록 제작했습니다.",
  ],
  problem: [
    "자바스크립트에 대한 이해가 부족해 API 통신 및 DOM 조작이 처음에는 어려웠습니다.",
    "특히 동적으로 렌더링되는 요소에서 이벤트가 적용되지 않는 문제를 경험했습니다.",
  ],
  solve: [
    "인터넷 강의와 공식 문서를 참고해 비동기 처리 방식과 jQuery의 이벤트 위임 개념을 학습했습니다.",
    "배운 내용을 실습에 적용하면서 API 연동 및 동적 이벤트 문제를 해결할 수 있었습니다.",
  ],
  review: [
    "처음으로 실전형 중고거래 플랫폼을 제작하며 프론트엔드의 데이터 흐름과 API 연동 구조를 경험할 수 있었습니다.",
    "학습 속도를 높이고 실전에서 바로 적용하는 능력을 키울 수 있었던 프로젝트였습니다.",
  ],
  hasImage: true,
  imgSrc: [
    "/projects/sgt/sgt-signup.png",
    "/projects/sgt/sgt-login.gif",
    "/projects/sgt/sgt-item.gif",
    "/projects/sgt/sgt-pick.gif",
    "/projects/sgt/sgt-fixinfo.gif",
    "/projects/sgt/sgt-mediaquery.gif",
    "/projects/sgt/sgt-search.gif",
  ],
};

export const BeermodeProject = {
  isImportant: false,
  title: "BEERMODE",
  subTitle: "2022.08 ~ 2022.08 (4인 프로젝트 / 팀원)",
  desc: "다양한 맥주 정보를 제공하고 사용자가 원하는 맥주를 쉽게 찾을 수 있는 웹사이트 제작",
  github: "https://github.com/yoonstar1996/BeerMode",
  skills: "Javascript, jQuery, bootstrap, Node.js, ejs",
  role: [
    "JavaScript와 jQuery를 활용해 맥주 정보 리스트 및 상세 페이지를 구현했습니다.",
    "나라별 필터링 기능을 통해 사용자가 원하는 맥주를 쉽게 찾을 수 있도록 구현했습니다.",
    "반응형 레이아웃을 적용해 모바일, 태블릿, 데스크톱 등 다양한 기기에서 최적화된 화면을 제공했습니다.",
  ],
  problem: [
    "처음하는 팀 프로젝트라 프로젝트 주제, 구조 등 준비하는 과정이 어려웠습니다.",
  ],
  solve: [
    "팀원들과 많은 이야기를 하여 서로의 관심사를 알아갔습니다.",
    "각자 할 수 있는 기능 구현에 대해 이야기를 나눠 역할 분배를 잘 나눴습니다.",
  ],
  review: [
    "JavaScript와 jQuery의 기본기를 다지고 DOM 조작 및 이벤트 처리 경험을 쌓을 수 있었습니다.",
    "시각적으로 보기 좋은 UI를 구현하며 사용자가 편리하게 탐색할 수 있는 구조를 만드는 경험이 되었습니다.",
  ],
  hasImage: true,
  imgSrc: [
    "/projects/beermode/beermode-Info.gif",
    "/projects/beermode/beermode-scroll.gif",
    "/projects/beermode/beermode-like.gif",
  ],
};

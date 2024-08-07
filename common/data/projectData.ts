import { handleClickUrl } from "../function/handleClick";

export const emotionDiaryProject = {
  projectTitle: "나만의 감정 일기장",
  projectSubTitle: "2024.08 ~ 2024.08 (1인 프로젝트)",
  projectImageSrc: {
    dark: "/projects/emotionDiary/emotion-diary-thumbnail.png",
    light: "/projects/emotionDiary/emotion-diary-thumbnail.png",
  },
  projectImageAlt: "emotionDiary_banner",
  projectSubDescs: [
    {
      text: "간단한 소개",
      descText: "나만의 감정 일기장을 만들어 보았습니다.",
    },
    {
      text: "Github",
      url: "https://github.com/yoonstar1996/self-study/tree/main/udemy/react/onbite-react/emotion-diary",
      onClick: handleClickUrl,
    },
    {
      text: "URL",
      url: "https://emotion-diary-sandy-pi.vercel.app/",
      onClick: handleClickUrl,
    },
    {
      text: "FrontEnd",
      descText: "React.js",
    },
  ],
  projectSummary: "나만의 감정 일기장",
  projectMainFunction: [
    "메인 페이지",
    "@헤더의 양쪽 버튼을 클릭하여, 다른 날짜로 이동",
    "@최신순, 오래된 순으로 필터링 가능",
    "@새 일기 쓰기 버튼 클릭 시, 일기 쓰는 페이지로 이동",
    "/projects/emotionDiary/emotion-diary-main.png",
    "New 페이지",
    "@날짜, 감정, 일기를 입력",
    "@뒤로 가기 버튼 클릭 시, nav(-1)",
    "@취소 하기 버튼 클릭 시, 메인 페이지로 이동",
    "@작성 완료 버튼 클릭 시, localStorage에 저장 후, 메인 페이지로 이동",
    "/projects/emotionDiary/emotion-diary-create.png",
    "Edit 페이지",
    "@해당 데이터를 불러와 날짜, 감정, 일기가 입력되어 있는 상태로 불러온다.",
    "@삭제 하기 버튼 클릭 시, 확인하는 팝업을 띄운 후, 확인을 클릭해야 삭제",
    "@다른 기능들은 새 일기 작성하는 것과 똑같은 로직",
    "/projects/emotionDiary/emotion-diary-update.png",
    "Diary 페이지",
    "@해당 날짜의 일기를 상세하게 볼 수 있는 페이지",
    "@수정 하기 버튼 클릭 시, Edit페이지로 이동",
    "/projects/emotionDiary/emotion-diary-detail.png",
  ],
  projectTechStack: {
    frontEnd: "React.js",
  },
};

export const portfolioProject = {
  projectTitle: "포트폴리오 웹사이트",
  projectSubTitle: "2023.11 ~ 2023.12 (1인 프로젝트)",
  projectImageSrc: {
    dark: "/projects/portfolio/portfolio-banner-dark.png",
    light: "/projects/portfolio/portfolio-banner-light.png",
  },
  projectImageAlt: "portfolio_banner",
  projectSubDescs: [
    {
      text: "간단한 소개",
      descText: "포트폴리오 용도로 제작한 웹사이트 입니다.",
    },
    {
      text: "Github",
      url: "https://github.com/yoonstar1996/portfolio",
      onClick: handleClickUrl,
    },
    {
      text: "URL",
      url: "https://portfolio-tau-lime-32.vercel.app",
      onClick: handleClickUrl,
    },
    {
      text: "FrontEnd",
      descText: "Next.js, TypeScript, styled-components",
    },
  ],
  projectSummary: "포폴 서머리",
  projectMainFunction: [
    "간단한 자기소개",
    "인적 사항",
    "기술 스택",
    "프로젝트 경험",
  ],
  projectTechStack: {
    frontEnd: "Next.js, Typescript, styled-components",
  },
};

export const celebProject = {
  projectTitle: "(주)셀럽스타즈",
  projectSubTitle: "2023.03 ~ 2023.08 (3인 프로젝트) (인턴)",
  projectImageSrc: {
    dark: "/projects/celeb/celeb-logo3.png",
    light: "/projects/celeb/celeb-logo1.png",
  },
  projectImageAlt: "celeb_logo",
  projectSubDescs: [
    {
      text: "간단한 소개",
      descText:
        "(주)셀럽스타즈는 오디션, 캐스팅, 아르바이트 등을 포함한 모델과 배우 캐스팅에 특화된 전문 플랫폼 입니다.",
    },
    {
      text: "Github",
      url: "https://github.com/yoonstar1996/celebstars",
      onClick: handleClickUrl,
    },
    {
      text: "URL",
      url: "https://celebstars.co.kr/",
      onClick: handleClickUrl,
    },
    {
      text: "FrontEnd",
      descText: "Next.js, Typescript, Redux, styled-components",
    },
    { text: "BackEnd", descText: "Nest.js, prisma" },
  ],
  projectSummary: "셀럽 서머리",
  projectMainFunction: [
    "전체적인 기능",
    "@Swiper 라이브러리를 사용하여, 이미지 슬라이더 기능 구현",
    "@react-cropper 라이브러리를 사용하여, 이미지 크롭 기능 구현",
    "@Nav바에 다크/라이트모드 기능 구현",
    "@사진과 같은 데이터는 서버 측에서 가져와서 보여줌(SSR)",
    "일반 서비스",
    "$1. 프로필 등록/수정:",
    "@프로필의 배너 이미지, 이름, 메인 사진, 아티스트 정보, 보조 사진 등 아티스트에 대한 정보를 등록할 수 있는 페이지 구현",
    "@프로필의 공개 여부를 전체 공개, 기업 공개, 비공개 셋 중 하나로 설정 가능",
    "@보조 사진의 개수는 최대 6개까지 등록 가능하도록 구현",
    "@필수 값이 모두 입력되어야만, 프로필 등록 버튼이 활성화되도록 구현",
    "$2. 프로필:",
    "@등록된 프로필의 배너 이미지, 이름, 메인 사진, 아티스트 정보, 보조 사진 등 아티스트에 대한 등록된 정보를 볼 수 있는 페이지 구현",
    "@다른 사람의 프로필을 볼 때에는, 좋아요, 북마크, 메시지 플로팅 버튼 활성화",
    "$3. 정보:",
    "@특정 회원의 등록된 프로필/포트폴리오를 한눈에 볼 수 있는 페이지 구현",
    "@등록된 프로필/포트폴리오가 없다면 프로필/포트폴리오 등록 페이지로 이동 가능한 버튼(본인일 경우) 구현",
    "@프로필/포트폴리오 클릭 시, 해당 프로필/포트폴리오 페이지로 이동",
    "$4. 검색:",
    "@모든 회원의 등록된 프로필/포트폴리오/에이전시를 한눈에 볼 수 있는 페이지 구현",
    "@로그인 되어있는 사람이 일반 회원일 경우, 기업 공개로 설정해둔 프로필/포트폴리오는 공개되지 않도록 구현",
    "@로그인 되어있는 사람이 기업 회원일 경우, 비공개로 설정해둔 프로필/포트폴리오를 제외한 모든 프로필/포트폴리오가 보이도록 구현",
    "@사진 클릭 시, 해당 프로필/포트폴리오 페이지로 이동",
    "$5. 유저:",
    "@사용자의 커뮤니티 정보(경력, 관심, 주제, 게시글 등)를 보여주는 페이지 구현",
    "@본인의 유저 페이지일 경우에 수정할 수 있는 버튼 활성화",
    "$6. 채팅:",
    "@다른 사람과 채팅 할 수 있는 페이지",
    "기업 서비스",
    "$1. 기업 회원가입:",
    "@일반 회원 계정일 경우, 해당 계정을 기업 회원으로 전환할 건지 물어보는 페이지 구현",
    "@필수 값을 다 입력해야 다음 페이지로 이동하는 버튼 활성화 기능 구현",
    "@react-daum-postcode 라이브러리를 사용하여, 정확한 주소 입력 가능",
    "$2. 대쉬보드 페이지:",
    "@기업 회원의 메인 페이지",
    "@본인이 등록한 캐스팅을 최신순으로 4개만 보여주는 기능 구현",
    "@일반 회원들이 등록한 프로필을 볼 수 있는 기능 구현",
    "$3. 캐스팅 등록/수정:",
    "@캐스팅의 이미지, 카테고리, 제목, 날짜, 역할, 상세정보, 지도, 지원 알림 등 캐스팅에 대한 정보를 등록/수정할 수 있는 페이지 구현",
    "@역할 추가 버튼을 클릭하여, 추가적인 역할 등록 가능",
    "@필수 값이 모두 입력되어야만, 캐스팅 등록/수정 버튼이 활성화되도록 구현",
    "$4. 캐스팅 리스트:",
    "@본인이 등록한 캐스팅을 모두 볼 수 있는 페이지",
    "@카테고리별, 시간순 필터링 기능 구현",
    "@카테고리, 캐스팅 이름, 역할 이름 등 검색으로 캐스팅 검색 기능 구현",
    "@톱니바퀴 아이콘 클릭 시, 해당 캐스팅 수정 페이지로 이동 가능",
    "$5. 캐스팅 지원자 보기:",
    "@특정 캐스팅 역할에 지원한 사용자 목록을 확인할 수 있는 페이지",
    "@지원자의 합격/불합격 여부를 볼 수 있고, 버튼을 통해 관리할 수 있는 기능 구현",
    "@ReactToPrint 라이브러리를 사용하여, 프로필 정보 출력 기능 구현",
    "$6. 에이전시 등록/수정:",
    "@에이전시의 배너 이미지, 메인 이미지, 이름, 소개, SNS, 정보, 문서 등 에이전시에 대한 정보를 등록/수정할 수 있는 페이지 구현",
    "@react-daum-postcode 라이브러리를 사용하여, 정확한 주소 입력 가능",
    "@필수 값이 모두 입력되어야만, 에이전시 등록/수정 버튼이 활성화되도록 구현",
    "$7. 에이전시 페이지:",
    "@등록된 에이전시의 배너 이미지, 메인 이미지, 이름, 소개, SNS, 정보, 문서 등 에이전시에 대한 등록된 정보를 볼 수 있는 페이지 구현",
    "@업로드한 문서 클릭 시 다운로드 가능",
    "$8. 아티스트 관리:",
    "@아티스트 검색 버튼을 통해, 현재 등록된 아티스트들의 프로필을 볼 수 있음",
    "@아티스트들을 체크한 후, 매핑하기 버튼을 클릭시, 해당 아티스트들에게 소속 제안 알림을 보냄",
    "$9. 기업 정보 등록/수정:",
    "@기업의 배너 이미지, 메인 이미지, 이름, 소개, 정보, 소개 페이지 등 기업에 대한 정보를 등록/수정 할 수 있는 페이지 구현",
    "$10. 기업 정보:",
    "@등록된 기업 정보의 배너 이미지, 메인 이미지, 이름, 소개, 정보, 소개 페이지 등 기업에 대한 등록된 정보를 볼 수 있는 페이지 구현",
    "@업로드한 문서 클릭 시 다운로드 가능",
  ],
  projectTechStack: {
    frontEnd: "Next.js, Typescript, Redux, styled-components",
    backEnd: "Nest.js, prisma",
  },
};

export const sgtProject = {
  projectTitle: "SGT Market",
  projectSubTitle: "2022.09 ~ 2022.10 (4인 프로젝트)",
  projectImageSrc: {
    dark: "/projects/sgt/sgt-banner.jpg",
    light: "/projects/sgt/sgt-banner.jpg",
  },
  projectImageAlt: "sgt_logo",
  projectSubDescs: [
    {
      text: "간단한 소개",
      descText: "SGT Market은 중고거래 사이트이자 나눔을 하는 사이트입니다.",
    },
    {
      text: "Github",
      url: "https://github.com/yoonstar1996/kdt--2project",
      onClick: handleClickUrl,
    },

    {
      text: "FrontEnd",
      descText: "Javascript, jQuery, axios",
    },
    {
      text: "BackEnd",
      descText: "Node.js, express",
    },
  ],
  projectSummary: "sgt 서머리",
  projectMainFunction: [
    "회원가입",
    "@전체적인 ui 및 ux",
    "@아이디, 비밀번호, 이름, 이메일, 휴대폰에 유효성 검사( 정규표현식 및 required 활용)를 넣어둠",
    "@아이디 중복 검사",
    "@다음 우편번호 찾기 api 사용",
    "@모든 유효성 검사 통과 시 사용자 정보를 axios를 활용하여 서버로 전송",
    "/projects/sgt/sgt-signup.png",
    "로그인",
    "@전체적인 ui 및 ux",
    "@클라이언트가 입력한 정보를 axios를 활용하여 서버로 전송",
    "@네이버, 카카오로그인 api 사용",
    "@네이버, 카카오로그인 버튼 클릭 시 네이버와 카카오에 가입한 이메일로 회원가입 진행",
    "/projects/sgt/sgt-login.gif",
    "마이페이지 > 상품 목록",
    "@전체적인 ui 및 ux",
    "@상품 등록 시 가격에 유효성 검사를 넣어두어 숫자만 입력 가능",
    "@이미지 업로드 시 이미지 미리보기 기능 구현",
    "@등록한 상품의 수정, 삭제 기능 구현",
    "/projects/sgt/sgt-item.gif",
    "마이페이지 > 찜한 상품",
    "@전체적인 ui 및 ux",
    "@홈페이지에서 물건을 보고 찜 누를 시 찜한 상품에서 볼 수 있음",
    "/projects/sgt/sgt-pick.gif",
    "마이페이지",
    "@개인 정보 수정",
    "#비밀번호를 알맞게 입력 시 회원 정보 수정 페이지로 이동, 그렇지 않은 경우 오류 메시지 발생",
    "@회원 정보 수정",
    "#아이디, 이름, 이메일은 DB에 저장되어있는 값이 기본으로 입력되어 있음. (아이디 수정 불가능)",
    "#수정 버튼 클릭 시 클라이언트가 작성한 정보 서버에 전송",
    "/projects/sgt/sgt-fixinfo.gif",
    "mediaquery를 사용하여 반응형 웹 페이지를 제작함",
    "/projects/sgt/sgt-mediaquery.gif",
    "Nav바 서치기능 추가",
    "@nav바 검색 기능 연결",
    "@돋보기 말고 엔터를 누를때에도 검색할 수 있도록 함",
    "/projects/sgt/sgt-search.gif",
  ],
  projectTechStack: {
    frontEnd: "Javascript, jQuery, axios",
    backEnd: "Node.js, express",
  },
};

export const dingonProject = {
  projectTitle: "Dingon",
  projectSubTitle: "2022.10 ~ 2022.19 (5인 프로젝트)",
  projectImageSrc: {
    dark: "/projects/dingon/dingon-banner.png",
    light: "/projects/dingon/dingon-banner.png",
  },
  projectImageAlt: "dingon_logo",
  projectSubDescs: [
    {
      text: "간단한 소개",
      descText:
        "dingon은 커뮤니티 사이트 입니다. 자신만의 생각을 적고 남들과 공유해보세요.",
    },
    {
      text: "Github",
      url: "https://github.com/yoonstar1996/dingon/tree/main",
      onClick: handleClickUrl,
    },
    {
      text: "FrontEnd",
      descText: "React, axios, mui",
    },
    {
      text: "BackEnd",
      descText: "Node.js, express",
    },
  ],
  projectSummary: "딩온 서머리",
  projectMainFunction: [
    "마우스의 위치에 따라 로고의 눈동자가 움직임",
    "로그인, 힛갤 박스",
    "@전체적인 ui 및 ux",
    "@삼항 연산자를 사용하여 IsLogined(true, false) 값에 따른 ui 및 ux 변화",
    "@클라이언트가 입력한 정보를 axios를 활용하여 서버로 전송",
    "@포지션 sticky 적용 > 스크롤 이동 시 같이 움직이도록",
    "@새로고침 아이콘을 누를 시 변경 된 state 값을 불러옴",
    "/projects/dingon/dingon_login.gif",
    "마이페이지 > 나의 게시글",
    "@전체적인 ui 및 ux",
    "@DB에 저장되어있는 나의 게시글을 axios를 활용하여 불러옴",
    "마이페이지 > 회원 정보 수정",
    "@전체적인 ui 및 ux",
    "@axios를 활용하여 수정하는 정보를 넘겨줌",
    "@닉네임 변경 시 8글자 이하로 제한",
    "/projects/dingon/dingon_mypage.gif",
    "모든 갤러리를 볼 수 있도록 스크롤 생성",
    "갤러리 클릭시 <Link To “해당 갤러리”>로 이동",
    "배너에 link를 걸어두고 클릭시 이동",
    "/projects/dingon/dingon_allgall.gif",
  ],
  projectTechStack: {
    frontEnd: "React, axios, mui",
    backEnd: "Node.js, express",
  },
};

export const beerModeProject = {
  projectTitle: "BEERMODE",
  projectSubTitle: "2022.08 ~ 2022.08 (4인 프로젝트)",
  projectImageSrc: {
    dark: "/projects/beermode/beermode-banner.png",
    light: "/projects/beermode/beermode-banner.png",
  },
  projectImageAlt: "beermode_logo",
  projectSubDescs: [
    {
      text: "간단한 소개",
      descText:
        "BEERMODE는 맥주에 대한 정보를 제공하고, 맥주에 대한 자신만의 감상과 기록을 남길 수 있는 서비스 입니다.",
    },
    {
      text: "Github",
      url: "https://github.com/yoonstar1996/BeerMode",
      onClick: handleClickUrl,
    },
    {
      text: "FrontEnd",
      descText: "Javascript, jQuery, bootstrap",
    },
    {
      text: "BackEnd",
      descText: "Node.js, ejs",
    },
  ],
  projectSummary: "비어모드 서머리",
  projectMainFunction: [
    "반응형 웹 페이지",
    "/projects/beermode/beermode-Info.gif",
    "내가 누른 정보를 화면 위쪽에 배치하여 눈에 쉽게 들어오도록 함",
    "ejs파일로 분류해 둔 나라 별 맥주를 나라를 클릭함에 따라 include하여 적용",
    "나라 별 리스트에 active를 걸어두어 현재 보고 있는 나라가 어디인지 알기 쉽도록 함",
    "화면이 줄어들었을 때 사용자 편의를 위한 ui/ux 변화",
    "@설명을 없애고 아이콘으로 변경",
    "@아이콘 클릭 시 설명을 보이게 하여 해당하는 정보를 볼 수 있도록",
    "/projects/beermode/beermode-scroll.gif",
    "아이콘 클릭 시 해당하는 이름, 이미지src, 누른 시간을 콘솔에 찍히도록 함",
    "::webkit-scrollbar로 페이지의 메인 색깔과 스크롤의 색깔을 통일감을 줌",
    "/projects/beermode/beermode-like.gif",
  ],
  projectTechStack: {
    frontEnd: "Javascript, jQuery, bootstrap",
    backEnd: "Node.js, ejs",
  },
};

export const starbucksProject = {
  projectTitle: "STARBUCKS 클론코딩",
  projectSubTitle: "2022.12 ~ 2023.01 (1인 프로젝트)",
  projectImageSrc: {
    dark: "/projects/starbucks/starbucks-banner.jpg",
    light: "/projects/starbucks/starbucks-banner.jpg",
  },
  projectImageAlt: "starbucks_logo",
  projectSubDescs: [
    {
      text: "간단한 소개",
      descText: "HTML, CSS, JS를 이용한 클론 프로젝트입니다.",
    },
    {
      text: "Github",
      url: "https://github.com/yoonstar1996/self-study/tree/main/fastcampus/FrontEnd-start/Part1/starbucks",
      onClick: handleClickUrl,
    },
    {
      text: "FrontEnd",
      descText: "Javascript, jQuery, bootstrap",
    },
    {
      text: "BackEnd",
      descText: "Node.js, ejs",
    },
  ],
  projectSummary:
    "인터넷 강의를 수강하면서, 스타벅스 클론 코딩 프로젝트를 진행하였습니다.",
  projectMainFunction: [
    "GSAP & ScrollToPlugin 라이브러리을 이용하여 스크롤 위치에 따른 오른쪽 배지 & 버튼 변화 ",
    "/projects/starbucks/sb-scroll_to_top.gif",
    "SWIPER 라이브러리를 이용하여 이미지 슬라이드를 간편하게 제작.",
    "/projects/starbucks/sb-slide_img.gif",
    "유튜브 동영상 자동, 반복재생",
    "/projects/starbucks/sb-youtube_video.gif",
    "ScrollMagic 라이브러리를 이용하여 스크롤 감지 후 애니메이션 작동.",
    "/projects/starbucks/sb-scroll_animation.gif",
  ],
  projectTechStack: {
    frontEnd: "Javascript, jQuery, bootstrap",
    backEnd: "Node.js, ejs",
  },
};

export const chatProject = {
  projectTitle: "채팅 프로젝트",
  projectSubTitle: "2022.09 ~ 2023.09 (1인 프로젝트)",
  projectImageSrc: {
    dark: "/projects/chat/chat-banner.jpg",
    light: "/projects/chat/chat-banner.jpg",
  },
  projectImageAlt: "chat_logo",
  projectSubDescs: [
    {
      text: "간단한 소개",
      descText: "socket.io를 활용한 미니 프로젝트입니다.",
    },
    {
      text: "Github",
      url: "https://github.com/yoonstar1996/socket",
      onClick: handleClickUrl,
    },
    {
      text: "FrontEnd",
      descText: "Javascript, jQuery, bootstrap",
    },
    {
      text: "BackEnd",
      descText: "Node.js, ejs",
    },
  ],
  projectSummary:
    "socket.io를 활용하여 간단한 채팅 기능과 DM기능이 있는 사이트를 만들어봤습니다. 코딩온(국비지원 학원)에서 백엔드 수업이 끝난 후, socket.io를 활용하면 실시간 채팅 사이트를 만들 수 있다는 얘기를 듣고, 가볍게 만든 채팅 프로젝트 입니다.",
  projectMainFunction: [
    "닉네임을 입력하여, 채팅방에 입장하기",
    "닉네임 길이 10글자 아래로",
    "닉네임 중복 검사",
    "입장시 dm을 보낼 수 있는 option의 value 값 추가",
    "/projects/chat/chat_login.gif",
    "채팅 메세지 입력하기",
    "/projects/chat/chat_message.gif",
    "option의 value에 해당하는 사람만 보이는 dm 메세지 보내기",
    "/projects/chat/chat_dm.gif",
  ],
  projectTechStack: {
    frontEnd: "Javascript, jQuery",
    backEnd: "Node.js, ejs, socket.io",
  },
};

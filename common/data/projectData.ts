import { handleClickUrl } from "../function/handleClick";

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
      iconText: "check",
      text: "간단한 소개",
      descText:
        "(주)셀럽스타즈는 오디션, 캐스팅, 아르바이트 등을 포함한 모델과 배우 캐스팅에 특화된 전문 플랫폼 입니다.",
    },
    {
      iconText: "check",
      text: "Github",
      url: "https://github.com/yoonstar1996/celebstars",
      onClick: handleClickUrl,
    },
    {
      iconText: "check",
      text: "URL",
      url: "https://celebstars.co.kr/",
      onClick: handleClickUrl,
    },
    {
      iconText: "check",
      text: "FrontEnd",
      descText: "Next.js, Typescript, Redux, styled-components",
    },
    { iconText: "check", text: "BackEnd", descText: "Nest.js, prisma" },
  ],
  projectSummary: "셀럽 서머리",
  // projectMainFunction: ["주요 기능1", "주요 기능2"],
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
      iconText: "check",
      text: "간단한 소개",
      descText: "SGT Market은 중고거래 사이트이자 나눔을 하는 사이트입니다.",
    },
    {
      iconText: "check",
      text: "Github",
      url: "https://github.com/yoonstar1996/kdt--2project",
      onClick: handleClickUrl,
    },
    {
      iconText: "check",
      text: "FrontEnd",
      descText: "Javascript, jQuery, axios",
    },
    {
      iconText: "check",
      text: "BackEnd",
      descText: "Node.js, express",
    },
  ],
  projectSummary: "sgt 서머리",
  // projectMainFunction: ["주요 기능1", "주요 기능2"],
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
      iconText: "check",
      text: "간단한 소개",
      descText:
        "dingon은 커뮤니티 사이트 입니다. 자신만의 생각을 적고 남들과 공유해보세요.",
    },
    {
      iconText: "check",
      text: "Github",
      url: "https://github.com/yoonstar1996/dingon/tree/main",
      onClick: handleClickUrl,
    },
    {
      iconText: "check",
      text: "FrontEnd",
      descText: "React, axios, mui",
    },
    {
      iconText: "check",
      text: "BackEnd",
      descText: "Node.js, express",
    },
  ],
  projectSummary: "딩온 서머리",
  // projectMainFunction: ["주요 기능1", "주요 기능2"],
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
      iconText: "check",
      text: "간단한 소개",
      descText:
        "BEERMODE는 맥주에 대한 정보를 제공하고, 맥주에 대한 자신만의 감상과 기록을 남길 수 있는 서비스 입니다.",
    },
    {
      iconText: "check",
      text: "Github",
      url: "https://github.com/yoonstar1996/BeerMode",
      onClick: handleClickUrl,
    },
    {
      iconText: "check",
      text: "FrontEnd",
      descText: "Javascript, jQuery, bootstrap",
    },
    {
      iconText: "check",
      text: "BackEnd",
      descText: "Node.js, ejs",
    },
  ],
  projectSummary: "비어모드 서머리",
  // projectMainFunction: ["반응형 웹 페이지", "주요 기능2"],
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
      iconText: "check",
      text: "간단한 소개",
      descText: "HTML, CSS, JS를 이용한 클론 프로젝트입니다.",
    },
    {
      iconText: "check",
      text: "Github",
      url: "https://github.com/yoonstar1996/self-study/tree/main/fastcampus/FrontEnd-start/Part1/starbucks",
      onClick: handleClickUrl,
    },
    {
      iconText: "check",
      text: "FrontEnd",
      descText: "Javascript, jQuery, bootstrap",
    },
    {
      iconText: "check",
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
      iconText: "check",
      text: "간단한 소개",
      descText: "socket.io를 활용한 미니 프로젝트입니다.",
    },
    {
      iconText: "check",
      text: "Github",
      url: "https://github.com/yoonstar1996/socket",
      onClick: handleClickUrl,
    },
    {
      iconText: "check",
      text: "FrontEnd",
      descText: "Javascript, jQuery, bootstrap",
    },
    {
      iconText: "check",
      text: "BackEnd",
      descText: "Node.js, ejs",
    },
  ],
  projectSummary:
    "socket.io를 활용하여 간단한 채팅 기능과 DM기능이 있는 사이트를 만들어봤습니다. 코딩온(국비지원 학원)에서 백엔드 수업이 끝난 후, socket.io를 활용하면 실시간 채팅 사이트를 만들 수 있다는 얘기를 듣고, 가볍게 만든 채팅 프로젝트 입니다.",
  // projectMainFunction: [
  //   "닉네임을 입력하여, 채팅방에 입장하기",
  //   "닉네임 중복 검사",
  //   "dm 기능",
  // ],
  projectTechStack: {
    frontEnd: "Javascript, jQuery",
    backEnd: "Node.js, ejs, socket.io",
  },
};
import React from "react";
import LinkSection from "../common/LinkSection";

function Career() {
  return (
    <section id="career" className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-7xl px-[1.5rem] py-[4rem] text-black">
        <LinkSection label="CAREER" linkTo="career" />
        <div className="flex flex-col">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="border-b-0 border-[#ccc] lg:border-r-[1px] lg:pr-[3rem]">
              <div className="flex h-[15rem] w-[15rem] items-center justify-center overflow-hidden rounded-full border border-[#ccc] bg-white p-3">
                <img
                  src="/images/career/milliway-logo.jpg"
                  alt="milliway-logo"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="mt-[2rem] pb-[2rem] pl-[3rem] lg:mt-0">
              <h4 className="pb-2 text-2xl font-black">(주) 밀리웨이</h4>
              <div className="pb-[1rem] text-subTextColor">
                2026.01 ~ 재직중
              </div>
              <div className="break-keep pb-[1rem]">
                차량 센서와 AI 기반 도로 파손 감지·관리 SaaS 스타트업
              </div>
              <div className="flex pb-[1rem]">
                <div className="rounded-lg bg-black px-3 py-1 text-white">
                  데이터 검수 및 운영 지원
                </div>
              </div>
              <div>
                <div>
                  <h5 className="mb-3 border-l-4 border-l-[#222] pl-3 font-bold">
                    도로관리시스템 데이터 검수 및 운영 업무
                  </h5>
                  <div className="text-sm">
                    블랙박스 영상·이미지 기반 포트홀 데이터 라벨링 및 검수,
                    사내 시스템(Atlas) 운영. <br />
                    시스템 사용 과정에서 발견한 이상 동작·버그를 개발자
                    관점에서 분석해 팀장 보고, 안정성 개선에 기여
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[3rem] flex flex-col items-center border-t border-[#ccc] pt-[3rem] lg:flex-row">
            <div className="border-b-0 border-[#ccc] lg:border-r-[1px] lg:pr-[3rem]">
              <div className="flex h-[15rem] w-[15rem] items-center justify-center rounded-full border border-[#ccc] bg-white p-3">
                <img src="/images/career/celeb-logo.png" alt="celeb-logo" />
              </div>
            </div>
            <div className="mt-[2rem] pb-[2rem] pl-[3rem] lg:mt-0">
              <h4 className="pb-2 text-2xl font-black">(주) 셀럽스타즈</h4>
              <div className="pb-[1rem] text-subTextColor">
                2023.03 ~ 2023.08 (인턴)
              </div>
              <div className="break-keep pb-[1rem]">
                모델, 배우 캐스팅 전문 플랫폼 <br />
                셀럽스타즈 오디션부터 캐스팅, 아르바이트까지
              </div>
              <div className="flex pb-[1rem]">
                <div className="rounded-lg bg-black px-3 py-1 text-white">
                  Frontend 개발
                </div>
              </div>
              <div>
                <div>
                  <h5 className="mb-3 border-l-4 border-l-[#222] pl-3 font-bold">
                    일반 서비스, 기업 서비스 프론트엔드 개발
                  </h5>
                  <div className="text-sm">
                    모델, 배우 등 일반 사용자부터 기업까지 사이트를 불편함 없이
                    이용하는걸 중점으로 개발
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;

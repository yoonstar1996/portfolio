import React from "react";
import LinkSection from "../common/LinkSection";

function Career() {
  return (
    <section id="career" className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-7xl px-[1.5rem] py-[4rem] text-black">
        <LinkSection label="CAREER" linkTo="career" />
        <div className="flex flex-col">
          <div className="flex">
            <div className="border-r-[1px] border-r-[#ccc] pr-[3rem]">
              <div className="flex h-[15rem] w-[15rem] items-center justify-center rounded-full border border-[#ccc] bg-white p-3">
                <img src="/images/career/celeb-logo.png" alt="celeb-logo" />
              </div>
            </div>
            <div className="pb-[2rem] pl-[3rem]">
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
                  {/* <div className="text-subTextColor pb-2 text-sm">
                    2024 어쩌구
                  </div> */}
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

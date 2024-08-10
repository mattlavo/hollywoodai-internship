import Image from "next/image";
import React from "react";

export default function Summary() {
  return (
    <section id="summary">
      <div className="py-[60px] px-0 mx-auto max-w-[1280px]"> {/* container */}
        <div className="py-12 px-4 rounded-[32px] gap-5 container flex-col md:gap-12 lg:mx-5 xl:rounded-[50px] xl:gap-0 xl:p-20 flex md:flex-row justify-between border border-[#E5E7EB]"> {/* Summary Row */}
          <div className="w-[47%]"> {/* summary text */}
            <div className="bg-[#dde6ff] pt-[5px] pr-[13px] pb-[3px] pl-[13px] rounded-[20px] text-xs leading-[11px] font-bold flex items-center gap-[6px] mb-[110px] w-fit"> {/* summary widget */}
              <span className="text-[#1e2227]">
                The future of entertainment
              </span> {/* summary widget title */}
              <span className="opacity-6 text-[6px]"> ⏺ </span> {/* summary widget emoji */}
              <span className="opacity-6">AI</span> {/* summary widget description */}
            </div>
            <h2 className="mb-3 text-[32px] xl:text-[39px] font-bold text-[#1E2227] -tracking-[1.17px] leading-[40.95px] xl:mb-[25px]">Say goodbye to 2 hour movies.</h2> {/* summary title */}
            <p className="text-[13px] xl:text-[17px] leading-[1.47em] text-[#7e7f8e]">
              HollywoodAI is designed to help you get high-quality summaries of
              your favourite movies instantly, without breaking a sweat. With
              our intuitive interface and powerful features, you can easily
              digest any movie in just minutes instead of hours.
            </p> {/* summary para */}
          </div>
          <figure className="p-4 xl:p-[30px] bg-[#dde6ff] rounded-xl flex flex-col items-center"> {/* summary figure */}
            <Image
              src="/assets/summary.png"
              width={500}
              height={500}
              alt="Summary"
              className="w-full h-auto rounded-xl"
            /> {/* summary figure img */}
            <span className="hidden xl:flex text-[#4A4A4A] text-[17px] font-bold -tracking-[0.17px] leading-[18.7px] mt-9 mb-2 text-center">Search. Summarize. Repeat.</span> {/* summary figure caption 1 */}
            <span className="hidden xl:flex text-[#4A4A4A] text-xs">Powered By AI</span> {/* summary figure caption 2 */}
          </figure>
        </div>
      </div>
    </section>
  );
}

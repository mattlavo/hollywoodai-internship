import { PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="header-background py-[208px] px-0 h-[90vh] flex items-center relative">
      <div className="row flex flex-col justify-center items-center">
        <div className="pt-[5px] pr-[13px] pb-[3px] pl-[13px] bg-[#ffffff26] rounded-[20px] text-[10px] leading-[11px] font-bold flex items-center gap-1.5 mb-8">
          <span className="text-white">Meet HollywoodAI</span>
          <span className="text-[6px]">⏺</span>
          <span className="text-[#e5e6e6] opacity-[60%]">
            Unleash the Power of AI
          </span>
        </div>
        <h1 className="leading-[50px] text-[52px] sm:text-[68px]  xl:text-[84px] font-bold -tracking-[2.1px] sm:leading-[77px] text-center text-white mb-7">
          Ultimate AI <br />
          Summarizer
          <Image
            src={"assets/bolt.svg"}
            width={0}
            height={0}
            style={{ width: "auto", height: "auto" }}
            alt="Bolt"
            className="inline-block ml-4"
          />
        </h1>
        <p className="text-xl font-medium leading-6 max-w-[480px] w-full opacity-75 text-[#E5E6E6] text-center mb-5">
          All in-one platform to watch your favorite movies in minutes using 
          AI.
        </p>
        <Link
          href="#"
          className="py-3 px-4 font-semibold bg-black bg-opacity-10 flex justify-center items-center text-lg leading-5 gap-4 rounded-[48px] h-16 cursor-pointer transition hover:bg-opacity-20"
        >
          <div className="w-10 h-10 text-xs flex justify-center items-center bg-white text-[#37393D] rounded-full">
            <PlayIcon className="w-4 h-4" />
          </div>
          <span className="text-white">See how it works &nbsp;</span>
        </Link>
      </div>
      <svg
        className="absolute left-0 right-0 -bottom-[2px] h-auto w-full block fill-[#f9f9fb]"
        width="1440"
        height="105"
        viewBox="0 0 1440 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0C240 68.7147 480 103.072 720 103.072C960 103.072 1200 68.7147 1440 0V104.113H0V0Z"
        ></path>
      </svg>
    </header>
  );
}

export default Header;

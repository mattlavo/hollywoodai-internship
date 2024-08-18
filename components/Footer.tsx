import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import FooterLinks from './FooterLinks';


function Footer() {

    

  return (
    <footer className="bg-[radial-gradient(circle_at_0%_-30%,_#a12a91,_rgba(33,_13,_123,_0.83),_transparent,_transparent,_transparent)] bg-black mt-[120px] text-white">
        <section id="cta">
            <svg className="fill-[#f9f9fb] w-full" preserveAspectRatio="none" width="1440" height="86" viewBox="0 0 1440 86" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 85.662C240 29.1253 480 0.857 720 0.857C960 0.857 1200 29.1253 1440 85.662V0H0V85.662Z"></path>
            </svg>
            <div className="py-[60px] px-0">
                <div className="container max-w-[1280px] mx-auto px-5 flex flex-col items-center font-semibold text-center">
                    <p className="mb-9 text-[10px] font-semibold uppercase tracking-[1px]">
                        <span className="py-1 px-3 bg-[#262626] rounded-xl mr-2">HollywoodAI</span>
                        Endless benefits, one subscription.
                    </p>
                    <h2 className="text-[100px] max-w-[569px] w-full leading-[100px] text-center mb-8 ">
                        Start your free trial.
                    </h2>
                    <p className="text-xl font-normal leading-[25px] opacity-50 max-w-[440px] w-full text-center mb-9">
                        Enjoy your favorite movies in minutes by letting AI do the work for you.
                    </p>
                    <button className="flex items-center justify-center gap-3 text-white rounded-xl py-4 px-7 font-semibold bg-[#1a1a1a] border-none transition duration-300 hover:scale-110">
                        <span>
                            Join Hollywood AI
                        </span>
                        <Image src={"/assets/bolt.svg"} alt="Bolt Icon" width={0} height={0} className="w-[14px] h-auto" />
                    </button>
                </div>
            </div>
        </section>
        <FooterLinks />
        <section id="copyright">
            <div className="flex justify-between items-center max-w-7xl mx-auto py-8 px-5">
                <form action="" className="flex gap-3">
                    <input type="text" className="py-5 px-7 bg-[#ffffff11] rounded-lg outline-none border-none text-[16px] text-white w-full" placeholder="Enter your email" />
                    <button type="button" className="py-[18px] px-[30px] text-[15px] font-bold text-white bg-[#ffffff11] border-none rounded-lg w-full cursor-not-allowed">Subscribe</button>
                </form>
                <span className="text-[#e5e6e6] text-sm">
                    2024 Copyright © Hollywood AI
                </span>
            </div>
        </section>
    </footer>
  )
}

export default Footer


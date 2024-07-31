import React from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

export default function LandingFeatures() {
  const featuresList = [
    {
      Icon: PlayCircleIcon,
      title: "AI Generated Summaries",
      text: "Save time with summaries of the world's best movies.",
    },
    {
      Icon: PlayCircleIcon,
      title: "Read or Listen",
      text: "Switch between reading and listening modes seamlessly.",
    },
    {
      Icon: PlayCircleIcon,
      title: "Find Your Next Flick",
      text: "Explore our movie lists and perzonalized recommendations.",
    },
    {
      Icon: PlayCircleIcon,
      title: "Multi Platform Access",
      text: "Enjoy your favorite movie on any device.",
    },
    {
      Icon: PlayCircleIcon,
      title: "Payment Gateways",
      text: "We securely process all card payments.",
    },
    {
      Icon: PlayCircleIcon,
      title: "Eco-Friendly Option",
      text: "HollywoodAI donates 10% of profits to charities",
    },
  ];

  return (
    <section id="features" className="mt-10">
      <div className="py-[60px] px-0">
        <div className="container mx-auto">
          <div className="max-w-[1280px] flex flex-col mx-auto items-center">
            <h1 className="text-[53px] font-bold -tracking-[1.59px] mb-5 text-center">
              The future of AI.
            </h1>
            <div className="text-lg leading-[1.27em] text-center text-[#3c4b62] mb-10 max-w-[500px] w-full font-normal">
              HollywoodAI is designed to help you enjoy high-quality summaries
              instantly, without breakinga sweat.
            </div>
            <div className="flex flex-wrap">
              {featuresList.map((feature, index) => (
                <LandingFeature Icon={feature.Icon} key={index} title={feature.title} text={feature.text}  />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


interface LandingFeatureProps {
  title: string;
  text: string;
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
  } & React.RefAttributes<SVGSVGElement>>;
}

function LandingFeature({ title, text, Icon}: LandingFeatureProps) {
  return (
    <div className="group w-full sm:w-1/2 lg:w-1/3 p-4 flex gap-5">
      <div className="flex-none w-[44px] h-[44px] text-[#1f2328] bg-[#f2f2f2] flex justify-center items-center rounded-[8px] transition duration-300 transform hover:scale-105 group-hover:bg-[#1e2227] group-hover:text-white">
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <h4 className="text-[#2c2e48] text-[17px] font-bold mb-3 -tracking-[0.5px]">
          {title}
        </h4>
        <p className="text-[14px] leading-[24px] text-[rgba(44,46,72,0.6)]">
          {text}
        </p>
      </div>
    </div>
  );
}

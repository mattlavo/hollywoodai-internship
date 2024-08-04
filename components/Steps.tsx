import React from 'react'

function Steps() {

    const steps = [
        {
            number: 1,
            text: "Browse through our wide selection of the most popular movies"
        },
        {
            number: 2,
            text: "Simply select a movie you'd like to have summarized and let our AI algorithms do the rest."
        },
        {
            number: 3,
            text: "Take a couple of minutes to read and listen to the summary. And you're done!"
        }
    ]

  return (
    <section id="steps">
        <div className="py-[60px] px-0 mx-auto max-w-[1280px]">
            <div className="container steps-background rounded-[50px] bg-[#010101]] bg-cover py-24 px-10 text-white text-opacity-60 flex flex-col items-center text-center">
                <h2 className="text-[64px] text-[#e5e6e6] leading-none -tracking-[1.92px] max-w-[430px] w-full mb-14">
                    So, how does it work?
                </h2>
                <div className="flex relative">
                    <div className="border-t border-[#ffffff1a] w-[70%] absolute left-1/2 translate-x-[-50%] translate-y-[32px]"></div>
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center pt-0 px-5 duration-[400ms] hover:translate-y-[-12px] group">
                            <div className="group-hover:bg-white group-hover:text-[#010101] group-hover:scale-110 w-16 h-16 border-2 border-white border-opacity-[0.17] bg-[#010101] rounded-full flex justify-center items-center text-xl text-white mb-10 relative z-[2] duration-[400ms]">
                                <span>{step.number}</span>
                            </div>
                            <div className="text-lg font-md leading-6 max-w-[280px] w-full">
                                {step.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Steps
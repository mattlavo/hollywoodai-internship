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
        <div className="container">
            <div className="row steps__row">
                <h2 className="steps__title">
                    So, how does it work?
                </h2>
                <div className="steps__list">
                    <div className="step-divider"></div>
                    {steps.map((step, index) => (
                        <div key={index} className="step">
                            <div className="step__number">
                                <span>{step.number}</span>
                            </div>
                            <div className="step__para">
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
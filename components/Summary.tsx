import Image from "next/image";
import React from "react";

export default function Summary() {
  return (
    <section id="summary">
      <div className="container"> {/* Container */}
        <div className="row summary__row">
          <div className="summary__text">
            <div className="summary__widget">
              <span className="summary__widget__title">The future of entertainment</span>
              <span className="summary__widget__emoji"> ⏺ </span>
              <span className="summary__widget__description"> 
                AI
              </span>
            </div>
            <h2 className="summary__title">
              Say goodbye to 2 hours
            </h2>
            <p className="summary__para">
              Hollywood AI is designed to help you get high-quality summaries of your favorite movies instantly, without breaking a sweat. With our intuitive interface and powerful features, you can easily digest any movie in just minutes instead of hours.
            </p>
          </div>
          <figure className="summary__figure">
            <Image src="/assets/summary.png" alt="summary image" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="summary__figure__img" />
            <span className="summary__figure__caption1">
              Search. Summarize. Repeat.
            </span>
            <span className="summary__figure__caption2">
              Powered by AI
            </span>
          </figure>
        </div>
      </div> 
    </section>
  );
}

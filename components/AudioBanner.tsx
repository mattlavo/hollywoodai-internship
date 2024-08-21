import Image from 'next/image'
import React from 'react'
import { IoIosRewind } from "react-icons/io";
import { IoIosFastforward } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

function AudioBanner() {
  return (
    <div className="audio">
      <audio src="https://advanced-internship-api-production.up.railway.app/13a0dfd5bf9fc0e5d94938281fe68d71.mp3"></audio>
      <div className="audio__track">
        <figure className="audio__track__img__wrapper">
          <Image src={"https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UY281_CR0,0,190,281_.jpg"} alt="" width={0} height={0} sizes={"100vw"} />
        </figure>
        <div className="audio__track__details">
          <div className="audio__track__title">Avatar</div>
          <div className="audio__track__director">James Cameron</div>
        </div>
      </div>
      <div className="audio__controls">
        <div className="audio__controls__wrapper">
          <button className="audio__controls__btn">
            <IoIosRewind className="audio__controls__btn__icon" />
          </button>
          <button className="audio__controls__btn audio__controls__btn--play">
            <FaPlay className="audio__controls__btn__icon" />
          </button>
          <button className="audio__controls__btn">
            <IoIosFastforward className="audio__controls__btn__icon" />
          </button>
        </div>
      </div>
      <div className="audio__progress">
        <span className="audio__time">0:00</span>
        <input className="audio__range" type="range" value="0" max="600" />
        <span className="audio__time">10:00</span>
      </div>
    </div>
  )
}

export default AudioBanner
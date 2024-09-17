import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoIosRewind } from "react-icons/io";
import { IoIosFastforward } from "react-icons/io";
import { FaPause, FaPlay } from "react-icons/fa";
import { Controls } from './Controls';
import { useAudioPlayerContext } from '@/context/audio-player-context';
import ProgressBar from './ProgressBar';

interface AudioBannerProps {
  movie: [],
  title: string,
  src: string,
  director: string,
  cover: string
}

function AudioBanner({ movie, title, src, director, cover }: AudioBannerProps) {

  const { setCurrentTrack, currentTrack, audioRef } = useAudioPlayerContext();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    setCurrentTrack({
      title,
      src,
      author: director,
      thumbnail: cover
    });
  }, [])

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, audioRef]);

  return (
    <div className="audio">
      <audio src={src} ref={audioRef}></audio>
      <div className="audio__track">
        <figure className="audio__track__img__wrapper">
          <Image src={cover || ''} alt="" className="audio__track__img" width={0} height={0} sizes={"100vw"} />
        </figure>
        <div className="audio__track__details">
          <div className="audio__track__title">{currentTrack.title}</div>
          <div className="audio__track__director">{currentTrack.author}</div>
        </div>
      </div>
      <Controls />
      <ProgressBar />
    </div>
  )
}

export default AudioBanner
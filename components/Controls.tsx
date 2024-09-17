import { useCallback, useEffect, useRef, useState } from "react";
import {
  BsFillFastForwardFill,
  BsFillPauseFill,
  BsFillPlayFill,
  BsFillRewindFill,
  BsSkipEndFill,
  BsSkipStartFill,
  BsShuffle,
  BsRepeat,
} from "react-icons/bs";
import { useAudioPlayerContext } from "@/context/audio-player-context";
import { FaPause, FaPlay } from "react-icons/fa";

export const Controls = () => {
  const {
    currentTrack,
    audioRef,
    setDuration,
    duration,
    setTimeProgress,
    progressBarRef,
  } = useAudioPlayerContext();
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const playAnimationRef = useRef<number | null>(null);

  const onLoadedMetadata = () => {
    const seconds = audioRef.current?.duration;
    if (seconds && !isNaN(seconds)) {
      setDuration(seconds);
      if (progressBarRef.current) {
        progressBarRef.current.max = seconds.toString();
      }
    }
  };

  const updateProgress = useCallback(() => {
    if (audioRef.current && progressBarRef.current && duration) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime.toString();
      progressBarRef.current.style.setProperty(
        "--range-progress",
        `${(currentTime / duration) * 100}%`
      );
    }
  }, [duration, setTimeProgress, audioRef, progressBarRef]);

  const startAnimation = useCallback(() => {
    if (audioRef.current && progressBarRef.current && duration) {
      const animate = () => {
        updateProgress();
        playAnimationRef.current = requestAnimationFrame(animate);
      };
      playAnimationRef.current = requestAnimationFrame(animate);
    }
  }, [updateProgress, duration, audioRef, progressBarRef]);

  const skipForward = () => {
    if (audioRef.current) {
        audioRef.current.currentTime += 10;
        updateProgress()
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
        audioRef.current.currentTime -= 10;
        updateProgress()
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
      startAnimation();
    } else {
      audioRef.current?.pause();
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
        playAnimationRef.current = null;
      }
      updateProgress();
    }

    return () => {
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
      }
    };
  }, [isPlaying, startAnimation, updateProgress]);

  return (
    <div className="audio__controls">
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      ></audio>
      <div className="audio__controls__wrapper">
        <button className="audio__controls__btn" onClick={() => skipBackward()}>
          <BsFillRewindFill className="audio__controls__btn__icon" size={20} />
        </button>
        <button
          onClick={() => setIsPlaying((prev) => !prev)}
          className="audio__controls__btn audio__controls__btn--play"
        >
          {isPlaying ? (
            <FaPause className="audio__controls__btn__icon--play" />
          ) : (
            <FaPlay className="audio__controls__btn__icon--play" />
          )}
        </button>
        <button className="audio__controls__btn" onClick={() => skipForward()}>
          <BsFillFastForwardFill
            className="audio__controls__btn__icon"
            size={20}
          />
        </button>
      </div>
    </div>
  );
};

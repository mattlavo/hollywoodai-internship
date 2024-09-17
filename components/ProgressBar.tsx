import { useAudioPlayerContext } from "@/context/audio-player-context";
import "@/styles/customize-progress-bar.css";

function ProgressBar() {
  const { progressBarRef, audioRef, timeProgress, setTimeProgress, duration } = useAudioPlayerContext();

  const handleProgressChange = () => {
    if (audioRef.current && progressBarRef.current) {
      const newTime = Number(progressBarRef.current.value);
      audioRef.current.currentTime = newTime;
      setTimeProgress(newTime);
      progressBarRef.current.style.setProperty(
        '--range-progress',
        `${(newTime/ duration) * 100}%`
      )
    }
  };

  const formatTime = (time: number | undefined): string => {
    if (typeof time === 'number' && !isNaN(time)) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        const formatMinutes = minutes.toString().padStart(2, '0');
        const formatSeconds = seconds.toString().padStart(2, '0');
        return `${formatMinutes}:${formatSeconds}`
    }
    return '00:00';
  }

  return (
    <div className="audio__progress">
      <span className="audio__time">{formatTime(timeProgress)}</span>
      <input
        className="audio__range"
        type="range"
        ref={progressBarRef}
        value={timeProgress}
        max={duration}
        onChange={handleProgressChange}
      />
      <span className="audio__time">{formatTime(duration)}</span>
    </div>
  );
}

export default ProgressBar;

import { BsMusicNoteBeamed } from "react-icons/bs";
import { useAudioPlayerContext } from "@/context/audio-player-context";
import Image from "next/image";

export const TrackInfo = () => {
    const {currentTrack} = useAudioPlayerContext();
    <div>
        <div>
            {currentTrack.thumbnail ? (
                <Image
                    src={currentTrack.thumbnail}
                    alt="Movie Thumbnail"
                    width={50}
                    height={50}
                />
            ) : (
                <div>
                    <span>
                        <BsMusicNoteBeamed />
                    </span>
                </div>
            )}
        </div>
        <div>
            <p>
                {currentTrack.title}
            </p>
            <p>{currentTrack.author}</p>
        </div>
    </div>
}
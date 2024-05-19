import { useEffect, useState } from 'react';

import { useStore } from '@/store';
import { usePlayer } from '@/hooks/usePlayer';
import { formatTime } from '@/lib/utils';

function ProgressBar() {
  const [currentTime, setCurrentTime] = useState(0);

  const { isPlaying } = usePlayer();

  const audio = useStore(state => state.audio);
  const currentTrack = useStore(state => state.currentTrack);

  useEffect(() => {
    let timerInterval: number;

    const updateCurrentTime = () => {
      if (audio) {
        const seek = Math.round(audio.seek());
        setCurrentTime(seek);
      }
    };

    if (isPlaying) {
      timerInterval = setInterval(updateCurrentTime, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [audio, isPlaying]);

  useEffect(() => {
    setCurrentTime(0);
  }, [audio]);

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseInt(e.target.value, 10);
    setCurrentTime(seekTime);
    audio?.seek(seekTime);
  };

  return (
    <>
      <label htmlFor="progress-bar" />
      <input
        type="range"
        id="progress-bar"
        value={currentTime}
        max={audio ? audio.duration() : 10}
        onChange={handleSeekChange}
        className="w-full h-1"
      />
      <div className="flex justify-between">
        <div>{formatTime(currentTime)}</div>
        <div>
          {currentTrack.duration && currentTrack.duration.padStart(5, '0')}
        </div>
      </div>
    </>
  );
}
export default ProgressBar;
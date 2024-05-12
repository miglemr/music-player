import { useEffect } from 'react';

import { useStore } from '@/store';

import { usePlayStatus } from '@/hooks/usePlayStatus';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

function Controls() {
  const { isPlaying, toggleIsPlaying } = usePlayStatus();

  const { sound, setSound, tracks, currentTrack, setCurrentTrack } = useStore();

  useEffect(() => {
    setSound(currentTrack.audioFilePath);
  }, [currentTrack, setSound]);

  useEffect(() => {
    if (isPlaying) sound.play();
  }, [sound, isPlaying]);

  function handlePlayToggle() {
    isPlaying ? sound.pause() : sound.play();
    toggleIsPlaying();
  }

  function handlePrevClick() {
    const currentTrackIndex = getCurrentTrackIndex();
    const prevTrackIndex =
      currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;

    sound.stop();

    setCurrentTrack(tracks[prevTrackIndex].id);
  }

  function handleNextClick() {
    const currentTrackIndex = getCurrentTrackIndex();
    const nextTrackIndex =
      currentTrackIndex === tracks.length - 1 ? 0 : currentTrackIndex + 1;

    sound.stop();

    setCurrentTrack(tracks[nextTrackIndex].id);
  }

  function getCurrentTrackIndex() {
    return tracks.findIndex(track => track.id === currentTrack.id);
  }

  return (
    <div className="flex justify-between">
      <div className="flex">
        <button onClick={handlePrevClick}>
          <SkipPreviousIcon />
        </button>
        <button onClick={handlePlayToggle}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </button>
        <button onClick={handleNextClick}>
          <SkipNextIcon />
        </button>
      </div>
      <div>Volume</div>
    </div>
  );
}
export default Controls;

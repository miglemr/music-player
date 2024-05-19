import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import { useStore } from '@/store';
import { usePlayer } from '@/hooks/usePlayer';
import { createHowl, getNextTrack, getPrevTrack } from '@/lib/utils';

import Volume from './Volume';

function Controls() {
  const { isPlaying, toggleIsPlaying } = usePlayer();

  const { tracks, currentTrack, setCurrentTrack, setNextTrack, audio } =
    useStore();

  function handlePrevClick() {
    const prevTrack = getPrevTrack(tracks, currentTrack);
    const howl = createHowl(prevTrack.audioFilePath, true, setNextTrack);

    setCurrentTrack(prevTrack.id);

    console.log('handleprevclick');

    audio?.unload();
    useStore.setState({
      audio: howl,
    });
  }

  function handleNextClick() {
    const nextTrack = getNextTrack(tracks, currentTrack);
    const howl = createHowl(nextTrack.audioFilePath, true, setNextTrack);

    setCurrentTrack(nextTrack.id);

    console.log('handlenextclick');

    audio?.unload();
    useStore.setState({
      audio: howl,
    });
  }

  return (
    <div className="flex justify-between">
      <div className="flex">
        <button onClick={handlePrevClick}>
          <SkipPreviousIcon />
        </button>
        <button onClick={toggleIsPlaying}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </button>
        <button onClick={handleNextClick}>
          <SkipNextIcon />
        </button>
      </div>
      <Volume />
    </div>
  );
}
export default Controls;

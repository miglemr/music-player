import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import { useStore } from '@/store';
import { usePlayer } from '@/hooks/usePlayer';
import { createHowl, getNextTrack, getPrevTrack } from '@/lib/utils';

function Controls() {
  const { isPlaying, toggleIsPlaying } = usePlayer();

  const { tracks, currentTrack, setCurrentTrack, setNextTrack, audio } =
    useStore();

  function handlePrevClick() {
    const prevTrack = getPrevTrack(tracks, currentTrack);
    const howl = createHowl(prevTrack.audioFilePath, true, setNextTrack);

    setCurrentTrack(prevTrack.id);

    audio?.unload();
    useStore.setState({
      audio: howl,
    });
  }

  function handleNextClick() {
    const nextTrack = getNextTrack(tracks, currentTrack);
    const howl = createHowl(nextTrack.audioFilePath, true, setNextTrack);

    setCurrentTrack(nextTrack.id);

    audio?.unload();
    useStore.setState({
      audio: howl,
    });
  }

  return (
    <div>
      <button onClick={handlePrevClick}>
        <SkipPreviousIcon sx={{ color: '#fff' }} />
      </button>
      <button onClick={toggleIsPlaying}>
        {isPlaying ? (
          <PauseIcon sx={{ color: '#fff' }} />
        ) : (
          <PlayArrowIcon sx={{ color: '#fff' }} />
        )}
      </button>
      <button onClick={handleNextClick}>
        <SkipNextIcon sx={{ color: '#fff' }} />
      </button>
    </div>
  );
}
export default Controls;

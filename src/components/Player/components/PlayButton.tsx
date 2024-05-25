import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

import { usePlayer } from '@/hooks/usePlayer';

function PlayButton() {
  const { isPlaying, toggleIsPlaying } = usePlayer();

  return (
    <button onClick={toggleIsPlaying} className="hidden sm:block">
      {isPlaying ? (
        <PauseCircleIcon sx={{ fontSize: 100 }} />
      ) : (
        <PlayCircleIcon sx={{ fontSize: 100 }} />
      )}
    </button>
  );
}
export default PlayButton;

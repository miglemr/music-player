import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

import { useStore } from '@/store';
import { usePlayer } from '@/hooks/usePlayer';

import Controls from './Controls';
import Progress from './Progress';

function Player() {
  const { isPlaying, toggleIsPlaying } = usePlayer();

  const currentTrack = useStore(state => state.currentTrack);
  const toggleFavorite = useStore(state => state.toggleFavorite);

  return (
    <>
      <div className="flex justify-center items-center h-80">
        <img
          src={currentTrack.cover}
          alt="cover"
          className="size-40 sm:size-60"
        />
      </div>
      <div className="flex justify-end">
        <button onClick={() => toggleFavorite(currentTrack.id)}>
          {currentTrack.favorite ? (
            <FavoriteIcon fontSize="large" />
          ) : (
            <FavoriteBorderIcon fontSize="large" />
          )}
        </button>
      </div>
      <div className="flex items-center mb-4">
        <button onClick={toggleIsPlaying}>
          {isPlaying ? (
            <PauseCircleIcon sx={{ fontSize: 100 }} />
          ) : (
            <PlayCircleIcon sx={{ fontSize: 100 }} />
          )}
        </button>
        <p className="text-2xl ml-2 font-medium">
          {currentTrack.title} by {currentTrack.artist}
        </p>
      </div>
      <Progress />
      <Controls />
    </>
  );
}

export default Player;

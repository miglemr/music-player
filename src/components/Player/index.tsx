import { useStore } from '@/store';
import useCurrentTrack from '@/hooks/useCurrentTrack';

import Controls from './Controls';
import Progress from './Progress';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function Player() {
  const currentTrack = useCurrentTrack();

  const toggleFavorite = useStore(state => state.toggleFavorite);

  if (!currentTrack) return;

  return (
    <div>
      <div className="flex justify-center items-center h-80">
        <img
          src={currentTrack.cover}
          alt="cover"
          className="size-40 sm:size-60"
        />
      </div>
      <div className="flex justify-end">
        {currentTrack.favorite ? (
          <button onClick={() => toggleFavorite(currentTrack.id)}>
            <FavoriteIcon fontSize="large" />
          </button>
        ) : (
          <button onClick={() => toggleFavorite(currentTrack.id)}>
            <FavoriteBorderIcon fontSize="large" />
          </button>
        )}
      </div>
      <div className="flex items-center mb-4">
        <button>
          <PlayCircleIcon sx={{ fontSize: 100 }} />
        </button>
        <p className="text-2xl ml-2 font-medium">
          {currentTrack.title} by {currentTrack.artist}
        </p>
      </div>
      <Progress />
      <Controls />
    </div>
  );
}

export default Player;

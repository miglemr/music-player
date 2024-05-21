import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { Track, useStore } from '@/store';

function FavoriteButton({
  track,
  size,
}: {
  track: Track;
  size: 'large' | 'small';
}) {
  const toggleFavorite = useStore(state => state.toggleFavorite);

  return (
    <button onClick={() => toggleFavorite(track.id)}>
      {track.favorite ? (
        <FavoriteIcon fontSize={size} />
      ) : (
        <FavoriteBorderIcon fontSize={size} />
      )}
    </button>
  );
}
export default FavoriteButton;

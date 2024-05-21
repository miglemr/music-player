import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { Track, useStore } from '@/store';

function FavoriteButton({
  track,
  size,
  borderColor,
}: {
  track: Track;
  size: 'large' | 'small';
  borderColor?: string;
}) {
  const toggleFavorite = useStore(state => state.toggleFavorite);

  return (
    <button onClick={() => toggleFavorite(track.id)}>
      {track.favorite ? (
        <FavoriteIcon fontSize={size} sx={{ color: '#C73659' }} />
      ) : (
        <FavoriteBorderIcon fontSize={size} sx={{ color: borderColor }} />
      )}
    </button>
  );
}
export default FavoriteButton;

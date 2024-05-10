import FavoriteIcon from '@mui/icons-material/Favorite';
import { type Track } from '@/store';

function Track({ track }: { track: Track }) {
  return (
    <div className="flex justify-between items-center m-4 text-sm font-medium">
      <div className="flex items-center">
        <img src={track.cover} alt="cover" className="size-12" />
        <div className="ml-2">
          <p>{track.artist}</p>
          <p>{track.title}</p>
          <p className="text-xs">04:00</p>
        </div>
      </div>
      <div>{track.favorite && <FavoriteIcon fontSize="small" />}</div>
    </div>
  );
}

export default Track;

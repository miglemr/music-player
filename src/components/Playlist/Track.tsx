import classNames from 'classnames';

import { useStore, type Track } from '@/store';

import FavoriteIcon from '@mui/icons-material/Favorite';

function Track({ track, isCurrent }: { track: Track; isCurrent: boolean }) {
  const setCurrentTrackId = useStore(state => state.setCurrentTrackId);

  const containerClasses = classNames(
    'flex justify-between items-center m-2 p-2 text-sm font-medium border-4 rounded',
    {
      'border-sky-200': isCurrent,
      'border-transparent': !isCurrent,
    }
  );
  return (
    <div className={containerClasses}>
      <button onClick={() => setCurrentTrackId(track.id)}>
        <div className="flex items-center">
          <img src={track.cover} alt="cover" className="size-12" />
          <div className="flex flex-col items-start ml-2">
            <p>{track.artist}</p>
            <p>{track.title}</p>
            <p className="text-xs">04:00</p>
          </div>
        </div>
      </button>
      <div>{track.favorite && <FavoriteIcon fontSize="small" />}</div>
    </div>
  );
}

export default Track;

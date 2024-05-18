import classNames from 'classnames';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useStore, type Track } from '@/store';
import { createHowl } from '@/lib/utils';

function Track({ track, isCurrent }: { track: Track; isCurrent: boolean }) {
  const { audio, setCurrentTrack, setNextTrack } = useStore();

  const containerClasses = classNames(
    'flex justify-between items-center m-2 p-2 text-sm font-medium border-4 rounded',
    {
      'border-sky-200': isCurrent,
      'border-transparent': !isCurrent,
    }
  );

  const handleClick = () => {
    const howl = createHowl(track.audioFilePath, true, setNextTrack);

    setCurrentTrack(track.id);

    audio?.unload();
    useStore.setState({
      audio: howl,
    });
  };
  return (
    <div className={containerClasses}>
      <button onClick={handleClick}>
        <div className="flex items-center">
          <img src={track.cover} alt="cover" className="size-12" />
          <div className="flex flex-col items-start ml-2">
            <p>{track.artist}</p>
            <p>{track.title}</p>
            <p className="text-xs">{track.duration}</p>
          </div>
        </div>
      </button>
      <div>{track.favorite && <FavoriteIcon fontSize="small" />}</div>
    </div>
  );
}

export default Track;

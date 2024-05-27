import classNames from 'classnames'

import { useStore, type Track } from '@/store'
import { selectAudio } from '@/store/selectors'
import { createHowl, formatTime } from '@/lib/utils'

import FavoriteButton from '@/components/FavoriteButton'

function Track({ track, isCurrent }: { track: Track; isCurrent: boolean }) {
  const { setAudio, setCurrentTrackIndex, setNextTrack } = useStore()

  const audio = useStore(selectAudio)

  const containerClasses = classNames(
    'flex justify-between items-center m-2 p-2 text-sm font-medium rounded',
    {
      'bg-gray-200': isCurrent,
    },
  )

  const handleClick = () => {
    const howl = createHowl(track.audioFilePath, true, setNextTrack)

    setCurrentTrackIndex(track.id)

    audio?.unload()
    setAudio(howl)
  }
  return (
    <div className={containerClasses}>
      <button onClick={handleClick}>
        <div className="flex items-center">
          <img src={track.cover} alt="cover" className="size-12" />
          <div className="flex flex-col items-start ml-2 truncate font-normal">
            <p>{track.artist}</p>
            <p>{track.title}</p>
            <p className="text-xs text-slate-600">{formatTime(track.duration)}</p>
          </div>
        </div>
      </button>
      <FavoriteButton track={track} size="small" />
    </div>
  )
}

export default Track

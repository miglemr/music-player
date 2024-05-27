import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'

import { useStore } from '@/store'
import { usePlayer } from '@/hooks/usePlayer'
import { createHowl, getPrevTrack, getNextTrack } from '@/lib/utils'
import { selectAudio, selectCurrentTrackIndex, selectTracks } from '@/store/selectors'

function Controls() {
  const { isPlaying, toggleIsPlaying } = usePlayer()

  const { setCurrentTrackIndex, setNextTrack, setAudio } = useStore()

  const tracks = useStore(selectTracks)
  const currentTrackIndex = useStore(selectCurrentTrackIndex)
  const audio = useStore(selectAudio)

  const handleClick = (prevOrNext: 'prev' | 'next') => {
    let nextTrack

    if (prevOrNext === 'prev') {
      nextTrack = getPrevTrack(tracks, currentTrackIndex)
    } else {
      nextTrack = getNextTrack(tracks, currentTrackIndex)
    }

    const howl = createHowl(nextTrack.audioFilePath, true, setNextTrack)

    setCurrentTrackIndex(nextTrack.id)

    audio?.unload()
    setAudio(howl)
  }

  return (
    <div>
      <button onClick={() => handleClick('prev')}>
        <SkipPreviousIcon sx={{ color: '#fff' }} />
      </button>
      <button onClick={toggleIsPlaying}>
        {isPlaying ? (
          <PauseIcon sx={{ color: '#fff' }} />
        ) : (
          <PlayArrowIcon sx={{ color: '#fff' }} />
        )}
      </button>
      <button onClick={() => handleClick('next')}>
        <SkipNextIcon sx={{ color: '#fff' }} />
      </button>
    </div>
  )
}
export default Controls

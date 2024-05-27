import { useEffect, useState } from 'react'

import QueueMusicIcon from '@mui/icons-material/QueueMusic'
import CloseIcon from '@mui/icons-material/Close'

import { useStore } from '@/store'
import { selectCurrentTrack } from '@/store/selectors'

import Playlist from '@/components/Playlist'
import FavoriteButton from '@/components/FavoriteButton'
import ProgressBar from './components/ProgressBar'
import PlayButton from './components/PlayButton'

function Player() {
  const [showPlaylist, setShowPlaylist] = useState(false)

  const currentTrack = useStore(selectCurrentTrack)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setShowPlaylist(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (showPlaylist)
    return (
      <div className="lg:hidden">
        <button onClick={() => setShowPlaylist(prev => !prev)}>
          <CloseIcon />
        </button>
        <Playlist />
      </div>
    )

  if (!currentTrack) {
    return (
      <div className="flex justify-center mt-10">
        <h1>Nothing to show</h1>
      </div>
    )
  }
  return (
    <>
      <div className="bg-stone-800 p-4">
        <div className="flex justify-center py-4 items-center">
          <img src={currentTrack.cover} alt="cover" className="size-40 sm:size-60" />
        </div>
        <div className="flex justify-end my-4">
          <FavoriteButton track={currentTrack} size="large" borderColor="#C73659" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center my-4">
          <PlayButton />
          <p className="md:text-2xl ml-2 font-medium">
            {currentTrack.title} by {currentTrack.artist}
          </p>
        </div>
        <ProgressBar track={currentTrack} />
        <div className="flex justify-end mt-6 lg:hidden">
          <button onClick={() => setShowPlaylist(prev => !prev)}>
            <QueueMusicIcon />
          </button>
        </div>
      </div>
    </>
  )
}

export default Player

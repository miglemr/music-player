import { type ReactNode, useState, useEffect } from 'react'
import { PlayerContext } from './PlayerContext'
import { useStore } from '@/store'
import { selectAudio } from '@/store/selectors'

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const audio = useStore(selectAudio)

  useEffect(() => {
    if (audio) {
      isPlaying ? audio.play() : audio.pause()
    }
  }, [audio, isPlaying])

  const toggleIsPlaying = () => setIsPlaying(prev => !prev)

  return (
    <PlayerContext.Provider value={{ isPlaying, toggleIsPlaying }}>
      {children}
    </PlayerContext.Provider>
  )
}

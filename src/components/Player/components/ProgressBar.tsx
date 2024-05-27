import { useEffect, useState } from 'react'

import { Track, useStore } from '@/store'
import { selectAudio } from '@/store/selectors'
import { usePlayer } from '@/hooks/usePlayer'
import { formatTime } from '@/lib/utils'

function ProgressBar({ track }: { track: Track }) {
  const [currentTime, setCurrentTime] = useState(0)

  const { isPlaying } = usePlayer()

  const audio = useStore(selectAudio)

  useEffect(() => {
    let timerInterval: number

    const updateCurrentTime = () => {
      if (audio) {
        const seek = Math.round(audio.seek())
        setCurrentTime(seek)
      }
    }

    if (isPlaying) {
      timerInterval = setInterval(updateCurrentTime, 1000)
    }

    return () => {
      clearInterval(timerInterval)
    }
  }, [audio, isPlaying])

  useEffect(() => {
    setCurrentTime(0)
  }, [audio])

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseInt(e.target.value, 10)
    setCurrentTime(seekTime)
    audio?.seek(seekTime)
  }

  return (
    <>
      <label htmlFor="progress-bar" />
      <input
        type="range"
        id="progress-bar"
        value={currentTime}
        max={audio ? audio.duration() : 10}
        onChange={handleSeekChange}
        className="w-full h-1"
      />
      <div className="flex justify-between">
        <div>{formatTime(currentTime)}</div>
        <div>{track.duration && formatTime(track.duration)}</div>
      </div>
    </>
  )
}
export default ProgressBar

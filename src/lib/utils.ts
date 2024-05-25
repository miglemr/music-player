import { Track } from '@/store';

export const getTrack = (trackArr: Track[], currentIndex: number) => {
  return trackArr[currentIndex];
};

export const getPrevTrack = (trackArr: Track[], currentIndex: number) => {
  const prevIndex = currentIndex === 0 ? trackArr.length - 1 : currentIndex - 1;

  return trackArr[prevIndex];
};

export const getNextTrack = (trackArr: Track[], currentIndex: number) => {
  const nextIndex = currentIndex === trackArr.length - 1 ? 0 : currentIndex + 1;

  return trackArr[nextIndex];
};

export const createHowl = (
  src: string,
  autoplay: boolean,
  onEnd: () => void
) => {
  return new Howl({
    src: [src],
    autoplay: autoplay,
    onend: () => onEnd(),
  });
};

export const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  const date = new Date();
  date.setMinutes(minutes);
  date.setSeconds(seconds);

  return new Intl.DateTimeFormat('en', {
    minute: '2-digit',
    second: '2-digit',
  }).format(date);
};

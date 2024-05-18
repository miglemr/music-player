import { Track } from '@/store';

export const getPrevTrack = (trackArr: Track[], currentTrack: Track) => {
  const currentIndex = trackArr.findIndex(
    track => track.id === currentTrack.id
  );
  const prevTrackIndex =
    currentIndex === 0 ? trackArr.length - 1 : currentIndex - 1;

  return trackArr[prevTrackIndex];
};

export const getNextTrack = (trackArr: Track[], currentTrack: Track) => {
  const currentIndex = trackArr.findIndex(
    track => track.id === currentTrack.id
  );
  const nextTrackIndex =
    currentIndex === trackArr.length - 1 ? 0 : currentIndex + 1;

  return trackArr[nextTrackIndex];
};

export const createHowl = (
  src: string,
  autoplay: boolean,
  onEnd: () => void
) => {
  return new Howl({
    src: [src],
    autoplay: autoplay,
    onend: () => onEnd,
  });
};

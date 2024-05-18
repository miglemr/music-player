import { useEffect } from 'react';

import { fetchTracks } from '@/data/fetchTracks';
import { type Track, useStore } from '@/store';
import { createHowl } from '@/lib/utils';

function useTracks() {
  const setNextTrack = useStore(state => state.setNextTrack);

  useEffect(() => {
    const getTracks = async () => {
      try {
        const response = (await fetchTracks()) as Array<
          Omit<Track, 'favorite'>
        >;

        const tracks = response.map(responseObj => {
          return {
            ...responseObj,
            favorite: false,
          };
        });

        return tracks;
      } catch (error) {
        console.error(error);
      }
    };

    getTracks().then(tracks => {
      if (tracks) {
        const howl = createHowl(tracks[0].audioFilePath, false, setNextTrack);

        useStore.setState({ tracks });
        useStore.setState({ currentTrack: tracks[0] });
        useStore.setState({
          audio: howl,
        });
      }
    });
  }, [setNextTrack]);
}
export default useTracks;
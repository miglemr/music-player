import { useEffect } from 'react';

import { fetchTracks } from '@/data/fetchTracks';
import { useStore } from '@/store';
import { createHowl } from '@/lib/utils';

function useTracks() {
  const setNextTrack = useStore(state => state.setNextTrack);

  useEffect(() => {
    const getTracks = async () => {
      const response = await fetchTracks();

      const tracks = response.map(responseObj => {
        return {
          ...responseObj,
          favorite: false,
        };
      });

      return tracks;
    };

    getTracks()
      .then(tracks => {
        if (tracks) {
          const howl = createHowl(tracks[0].audioFilePath, false, setNextTrack);

          useStore.setState({ tracks });
          useStore.setState({ currentTrack: tracks[0] });
          useStore.setState({
            audio: howl,
          });
        }
      })
      .catch(error => {
        // eslint-disable-next-line
        console.error(error);
      });
  }, [setNextTrack]);
}
export default useTracks;

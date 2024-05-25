import { useEffect, useState } from 'react';

import { fetchTracks } from '@/data/fetchTracks';
import { useStore } from '@/store';
import { createHowl } from '@/lib/utils';

function useTracks() {
  const [status, setStatus] = useState('');

  const { setTracks, setAudio, setNextTrack } = useStore();

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

          setTracks(tracks);
          setAudio(howl);
        }
      })
      .catch(error => {
        // eslint-disable-next-line
        console.error(error);

        setStatus('error');
      });
  }, [setNextTrack, setAudio, setTracks]);

  return status;
}
export default useTracks;

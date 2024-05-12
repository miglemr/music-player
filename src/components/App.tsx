import { useEffect } from 'react';

import Player from '@/components/Player';
import Playlist from '@/components/Playlist';

import { fetchTracks } from '@/data/fetchTracks';
import { type Track, useStore } from '@/store';
import { PlayStatusProvider } from '@/contexts';

function App() {
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
      useStore.setState({ tracks });
      useStore.setState({ currentTrack: tracks?.[0] });
    });
  }, []);

  return (
    <PlayStatusProvider>
      <div className="min-h-screen flex">
        <div className="container w-3/4">
          <Player />
        </div>
        <div className="w-1/4 overflow-y-auto h-screen border-l-2">
          <Playlist />
        </div>
      </div>
    </PlayStatusProvider>
  );
}

export default App;

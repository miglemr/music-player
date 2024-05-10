import Player from '@/components/Player';
import Playlist from '@/components/Playlist';
import { useStore } from '@/store';
import { useEffect } from 'react';

function App() {
  const setTracks = useStore(state => state.setTracks);

  useEffect(() => {
    setTracks();
  }, [setTracks]);

  return (
    <div className="min-h-screen flex">
      <div className="container w-3/4">
        <Player />
      </div>
      <div className="w-1/4 overflow-y-auto h-screen border-l-2">
        <Playlist />
      </div>
    </div>
  );
}

export default App;

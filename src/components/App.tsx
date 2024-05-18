import Player from '@/components/Player';
import Playlist from '@/components/Playlist';

import { PlayerProvider } from '@/contexts';
import useTracks from '@/hooks/useTracks';

function App() {
  useTracks();

  return (
    <PlayerProvider>
      <div className="min-h-screen flex">
        <div className="container w-3/4">
          <Player />
        </div>
        <div className="w-1/4 overflow-y-auto h-screen border-l-2">
          <Playlist />
        </div>
      </div>
    </PlayerProvider>
  );
}

export default App;

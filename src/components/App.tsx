import Player from '@/components/Player';
import Playlist from '@/components/Playlist';

import { PlayerProvider } from '@/contexts';
import useTracks from '@/hooks/useTracks';

import Controls from './Player/Controls';
import Volume from './Player/Volume';

function App() {
  useTracks();

  return (
    <PlayerProvider>
      <div className="h-screen lg:flex ">
        <div className="container mx-auto px-0 lg:w-3/4">
          <Player />
        </div>
        <div className="lg:w-1/4 overflow-y-auto h-screen border-l-2 hidden lg:block">
          <Playlist />
        </div>
      </div>
      <div className="flex justify-between items-center px-4 fixed bottom-0 w-full border-t-2 bg-white">
        <Controls />
        <Volume />
      </div>
    </PlayerProvider>
  );
}

export default App;

import Alert from '@mui/material/Alert';

import { PlayerProvider } from '@/contexts';
import useTracks from '@/hooks/useTracks';

import Player from '@/components/Player';
import Playlist from '@/components/Playlist';
import Controls from '@/components/Player/Controls';
import Volume from '@/components/Player/Volume';

function App() {
  const status = useTracks();

  return (
    <PlayerProvider>
      <div className="h-screen lg:flex ">
        <div className="container mx-auto px-0 lg:w-3/4 ">
          <Player />
        </div>
        <div className="lg:w-1/4 overflow-y-auto h-screen border-l-2 hidden lg:block">
          <Playlist />
          {status === 'error' && (
            <div className="flex justify-center">
              <Alert severity="error">Failed to fetch tracks</Alert>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center px-4 fixed bottom-0 w-full  bg-stone-800">
        <Controls />
        <Volume />
      </div>
    </PlayerProvider>
  );
}

export default App;

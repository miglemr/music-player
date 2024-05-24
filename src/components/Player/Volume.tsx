import { useEffect, useState } from 'react';

import { Howler } from 'howler';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import VolumeDown from '@mui/icons-material/VolumeDown';

function Volume() {
  const [volume, setVolume] = useState<number>(0.5);

  useEffect(() => {
    Howler.volume(volume);
  }, [volume]);

  function handleVolumeChange(_event: Event, newValue: number | number[]) {
    if (typeof newValue !== 'number') {
      return;
    }
    setVolume(newValue);
  }

  return (
    <div className="flex items-center">
      <VolumeDown sx={{ color: '#fff' }} />
      <Box sx={{ width: 100, marginTop: 1 }}>
        <Slider
          size="small"
          aria-label="Volume"
          sx={{ color: '#fff' }}
          value={volume}
          min={0.0}
          step={0.00000001}
          max={1.0}
          onChange={handleVolumeChange}
        />
      </Box>
    </div>
  );
}
export default Volume;

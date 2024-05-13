import { useEffect, useState } from 'react';

import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import VolumeDown from '@mui/icons-material/VolumeDown';

import { Howler } from 'howler';

function Volume() {
  const [volume, setVolume] = useState<number>(0.5);

  useEffect(() => {
    Howler.volume(volume);
  }, [volume]);

  function handleVolumeChange(_event: Event, newValue: number | number[]) {
    setVolume(newValue as number);
  }
  return (
    <div className="flex items-center">
      <VolumeDown />
      <Box sx={{ width: 100, marginTop: 1 }}>
        <Slider
          size="small"
          aria-label="Volume"
          color="secondary"
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

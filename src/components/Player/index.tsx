import Controls from './Controls';
import Progress from './Progress';

function Player() {
  return (
    <div>
      <div className="flex justify-center items-center h-80">
        <p>Album cover</p>
      </div>
      <div className="flex justify-end">
        <p>❤️</p>
      </div>
      <div className="flex mb-4">
        <p className="mr-4">Play</p>
        <p>Title of the song by Artist</p>
      </div>
      <Progress />
      <Controls />
    </div>
  );
}

export default Player;

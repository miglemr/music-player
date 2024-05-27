import { State } from '.'

const selectTracks = (state: State) => state.tracks
const selectCurrentTrackIndex = (state: State) => state.currentTrackIndex
const selectCurrentTrack = (state: State) => state.tracks[state.currentTrackIndex]
const selectAudio = (state: State) => state.audio

export { selectTracks, selectCurrentTrackIndex, selectCurrentTrack, selectAudio }

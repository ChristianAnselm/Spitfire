import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TracksReducer from './tracks_reducer';
import PlaylistsReducer from './playlists_reducer';
import AlbumsReducer from './albums_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  playlists: PlaylistsReducer,
  tracks: TracksReducer,
  albums: AlbumsReducer,
});

export default RootReducer;

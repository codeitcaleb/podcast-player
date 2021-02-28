import { configureStore } from '@reduxjs/toolkit';
import podcastReducer from '../features/podcast/podcastSlice';

export default configureStore({
  reducer: {
    podcast: podcastReducer,
  },
});

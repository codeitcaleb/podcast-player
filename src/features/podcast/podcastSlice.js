import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = "https://gist.githubusercontent.com/CervantesVive/3f85bf26672cf27fe1cd932ffcb7ecac/raw/4de50b351a62158083a97f3b950bd786d3ffd928/awesome-podcasts.json"

export const getPodcasts = createAsyncThunk('podcast/getPodcasts', async () => {
  return fetch(url).then(response => response.json())  
})

const initialState = {
  podcasts: [],
  currentlyPlaying: '',
  status: null
}

 const podcastSlice = createSlice({
  name: 'podcast',
  initialState , 
  reducers: {
    updatePlaying: (state, action) => {
      state.currentlyPlaying = action.payload
  }},
  extraReducers: {
    [getPodcasts.pending]: (state) => {
      state.status = 'loading'
    },
    [getPodcasts.fulfilled]: (state, { payload }) => {
      state.podcasts = payload
      state.status = 'success'
    },
    [getPodcasts.rejected]: (state) => {
      state.status = 'failed'
    }
  }
});

export const { updatePlaying } = podcastSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectPodcasts = state => state.podcast.podcasts.podcasts
export const selectCurrentlyPlaying = state => state.podcast.currentlyPlaying

export default podcastSlice.reducer;

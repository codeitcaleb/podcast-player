import { findIndex } from "lodash";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = "https://gist.githubusercontent.com/CervantesVive/3f85bf26672cf27fe1cd932ffcb7ecac/raw/4de50b351a62158083a97f3b950bd786d3ffd928/awesome-podcasts.json"

export const getPodcasts = createAsyncThunk("podcast/getPodcasts", async () => {
  return fetch(url).then(response => response.json())  
})

const formatPodcasts = (list) => (
  list?.map((podcast) => ({ ...podcast, isSelected: false })) 
)
  
const initialState = {
  allPodcasts: [],
  selectedPodcasts: [],
  currentlyPlaying: "",
  status: "idle"
}

 const podcastSlice = createSlice({
  name: "podcast",
  initialState , 
  reducers: {
    updatePlaying: (state, {payload}) => {
      state.currentlyPlaying = payload
    },
    updatePodcast: (state, { payload: podcast}) => {
      console.log("update podcast:", podcast.title)
      const idx = findIndex(state.allPodcasts, podcast)
      state.allPodcasts[idx] = {...podcast, isSelected: !podcast.isSelected }
      
      if (state.selectedPodcasts.map(p => p.title).includes(podcast.title)) {
        state.selectedPodcasts = state.selectedPodcasts.filter(p => p.title !== podcast.title);        
      }
    },
    updateSelectedPodcasts: (state, { payload }) => {
      console.log(payload)
      state.selectedPodcasts.push(payload)
    }, 
    reorderSelectedPodcasts: (state, { payload }) => {
      state.selectedPodcasts = payload
    }
  },
  extraReducers: {
    [getPodcasts.pending]: (state) => {
      state.status = "loading"
    },
    [getPodcasts.fulfilled]: (state, { payload }) => {
      state.status = "success"
      state.allPodcasts.push(...formatPodcasts(payload.podcasts))
    },
    [getPodcasts.rejected]: (state) => {
      state.status = "failed"
    }
  }
});

export const { 
  updatePlaying, 
  updatePodcast, 
  updateSelectedPodcasts, 
  reorderSelectedPodcasts,
  removePodcasts 
} = podcastSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getAllPodcasts = state => {
  console.log(state.podcast)
  return state.podcast.allPodcasts;
}

export const selectUnselectedPodcasts = (state) => {
  return state.podcast.allPodcasts.filter(p => !state.podcast.selectedPodcasts?.map(q => q.title).includes(p.title))
}
export const selectAllSelectedPodcasts = (state) => state.podcast.selectedPodcasts.filter(x => !!x)
export const selectPodcastStatus = (state) => state.podcast.status
export const selectCurrentlyPlaying = (state) => state.podcast.currentlyPlaying

export default podcastSlice.reducer;

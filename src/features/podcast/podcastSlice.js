import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = "https://gist.githubusercontent.com/CervantesVive/3f85bf26672cf27fe1cd932ffcb7ecac/raw/4de50b351a62158083a97f3b950bd786d3ffd928/awesome-podcasts.json"

export const getPodcasts = createAsyncThunk('podcast/getPodcasts', async () => {
  return fetch(url).then(response => response.json())  
})

const initialState = {
  podcasts: [],
  status: null
}

 const podcastSlice = createSlice({
  name: 'podcast',
  initialState, 
  reducers: {
    getPodcasts: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.podcasts.push(action.payload)
    }//,
    // decrement: state => {
      //   state.value -= 1;
      // },
      // incrementByAmount: (state, action) => {
      //   state.value += action.payload;
    // },
  },
  extraReducers: {
    [getPodcasts.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getPodcasts.fulfilled]: (state, { payload }) => {
      state.podcasts = payload
      state.hasStatus = 'success'
    },
    [getPodcasts.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
});

export const { increment, decrement, incrementByAmount } = podcastSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const fetchPodcasts = amount => dispatch => {
  return 
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;



export default podcastSlice.reducer;

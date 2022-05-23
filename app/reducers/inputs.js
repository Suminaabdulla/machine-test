import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'otp',
  initialState: {
    inputList: [],
  },
  reducers: {
    saveJsonInputs: (state, action) => {
      state.inputList = action?.payload;
    },
  },
});

export default slice.reducer;

export const {saveJsonInputs} = slice.actions;

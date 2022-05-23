import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'otp',
  initialState: {
    formData: {},
  },
  reducers: {
    saveFormData: (state, action) => {
      state.formData = action?.payload;
    },
  },
});

export default slice.reducer;

export const {saveFormData} = slice.actions;

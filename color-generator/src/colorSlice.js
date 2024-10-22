import { createSlice } from '@reduxjs/toolkit';

export const colorSlice = createSlice({
  name: 'colors',
  initialState: {
    color: '#FFFFFF',
    colorList: [],
  },
  reducers: {
    generateColor: (state) => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      state.color = color;
    },
    setColorFromPicker: (state, action) => {
      state.color = action.payload;
    },
    setColorFromCode: (state, action) => {
      state.color = action.payload;
    },
    addColor: (state) => {
      state.colorList.push(state.color);
    },
    removeColor: (state, action) => {
      state.colorList.splice(action.payload, 1);
    },
  },
});

export const {
  generateColor,
  setColorFromPicker,
  setColorFromCode,
  addColor,
  removeColor,
} = colorSlice.actions;

export default colorSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  enteredPin: '',
  pinStatus: 'none',
  message: '',
};

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    addDigit(state, action: PayloadAction<string>) {
      if (state.enteredPin.length < 4) {
        state.enteredPin += action.payload;
      }
    },
    removeLastDigit(state) {
      state.enteredPin = state.enteredPin.slice(0, -1);
    },
    checkPin(state) {
      const correctPin = '4589';
      if (state.enteredPin === correctPin) {
        state.pinStatus = 'correct';
        state.message = 'Access Granted';
      } else {
        state.pinStatus = 'incorrect';
        state.message = 'Access Denied';
      }
    }
  }
});

export const { addDigit, removeLastDigit, checkPin } = passwordSlice.actions;
export default passwordSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playing: false,
  currentAyeh: -1,
};

export const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    IsPlaying: (state, actions) => {
      state.playing = actions.payload;
    },
    playCurrentAyeh: (state, actions) => {
      state.currentAyeh = actions.payload;
    },
  },
});

export const Playing = (state) => state.audio.playing;
export const CurrentAyeh = (state) => state.audio.currentAyeh;

export const { IsPlaying, playCurrentAyeh } = audioSlice.actions;
export default audioSlice.reducer;

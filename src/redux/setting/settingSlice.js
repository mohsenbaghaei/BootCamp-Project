import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  localTranslate: localStorage.getItem("Translate"),

  localAyehFont: localStorage.getItem("AyehFont"),
  localAyehThickness: localStorage.getItem("AyehThickness"),
  localAyehBigness: localStorage.getItem("AyehBigness"),
  localTranslateThickness: localStorage.getItem("TranslateThickness"),
  localTranslateBigness: localStorage.getItem("TranslateBigness"),

  localShowAyeh: localStorage.getItem("ShowAyeh"),

  localQariPlayer: localStorage.getItem("QariPlayer"),

  localPlayAyeh: localStorage.getItem("PlayAyeh"),

  localAyehRepeat: localStorage.getItem("AyehRepeat"),
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    translate: (state, actions) => {
      state.localTranslate = actions.payload;
      localStorage.setItem("Translate", actions.payload);
    },

    ayehFont: (state, actions) => {
      state.localAyehFont = actions.payload;
      localStorage.setItem("AyehFont", actions.payload);
    },
    ayehThickness: (state, actions) => {
      state.localAyehThickness = actions.payload;
      localStorage.setItem("AyehThickness", actions.payload);
    },
    ayehBigness: (state, actions) => {
      state.localAyehBigness = actions.payload;
      localStorage.setItem("AyehBigness", actions.payload);
    },
    translateThickness: (state, actions) => {
      state.localTranslateThickness = actions.payload;
      localStorage.setItem("localTranslateThickness", actions.payload);
    },
    translateBigness: (state, actions) => {
      state.localTranslateBigness = actions.payload;
      localStorage.setItem("TranslateBigness", actions.payload);
    },

    showAyeh: (state, actions) => {
      state.localShowAyeh = actions.payload;
      localStorage.setItem("ShowAyeh", actions.payload);
    },

    qariPlayer: (state, actions) => {
      state.localQariPlayer = actions.payload;
      localStorage.setItem("QariPlayer", actions.payload);
    },

    playAyeh: (state, actions) => {
      state.localPlayAyeh = actions.payload;
      localStorage.setItem("PlayAyeh", actions.payload);
    },

    ayehRepeat: (state, actions) => {
      state.localAyehRepeat = actions.payload;
      localStorage.setItem("AyehRepeat", actions.payload);
    },
  },
});
export const Localtranslate = (state) => state.setting.localTranslate;

export const LocalayehFont = (state) => state.setting.localAyehFont;
export const LocalayehThickness = (state) => state.setting.localAyehThickness;
export const LocalayehBigness = (state) => state.setting.localAyehBigness;
export const LocaltranslateThickness = (state) =>
  state.setting.localTranslateThickness;
export const LocaltranslateBigness = (state) =>
  state.setting.localTranslateBigness;

export const LocalShowAyeh = (state) => state.setting.localShowAyeh;

export const LocalQariPlayer = (state) => state.setting.localQariPlayer;

export const LocalPlayAyeh = (state) => state.setting.localPlayAyeh;

export const LocalAyehRepeat = (state) => state.setting.localAyehRepeat;

export const {
  translate,
  ayehFont,
  ayehThickness,
  ayehBigness,
  translateThickness,
  translateBigness,
  showAyeh,
  qariPlayer,
  playAyeh,
  ayehRepeat,
} = settingSlice.actions;

export default settingSlice.reducer;

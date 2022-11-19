import { configureStore } from "@reduxjs/toolkit";
import settingreducer from './setting/settingSlice'
import audioreducer from "./audio/audioSlice";

export const store = configureStore({
    reducer : {
        setting : settingreducer,
        audio : audioreducer,
    }
})
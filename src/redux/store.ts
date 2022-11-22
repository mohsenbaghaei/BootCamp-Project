import { configureStore } from "@reduxjs/toolkit";
import settingreducer from './setting/settingSlice'
import audioreducer from "./audio/audioSlice";
import sideAyehreducer from "./sideAyeh/sideAyehSlice";

export const store = configureStore({
    reducer : {
        setting : settingreducer,
        audio : audioreducer,
        side : sideAyehreducer,
    }
})
import { configureStore } from "@reduxjs/toolkit";
import settingreducer from './setting/settingSlice'

export const store = configureStore({
    reducer : {
        setting : settingreducer
    }
})
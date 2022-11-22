import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sideShow : false,
    copyAyeh : false,
    shareAyeh : false,
}

export const sideAyehSlice = createSlice({
    name :  'side',
    initialState,
    reducers : {
        changeSideShow : (state , actions) => {
            state.sideShow = actions.payload
        },
        changeCopyAyeh : (state , actions) =>{
            state.copyAyeh = actions.payload
        },
        changeShareAyeh : (state , actions) =>{
            state.shareAyeh = actions.payload
        }
    }
})

export const SideShow = (state) => state.side.sideShow
export const CopyAyeh = (state) => state.side.copyAyeh
export const ShareAyeh = (state) => state.side.shareAyeh

export const { changeSideShow , changeCopyAyeh , changeShareAyeh} = sideAyehSlice.actions

export default sideAyehSlice.reducer
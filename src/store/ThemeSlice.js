import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: {theme: 'light'},
    reducers:{
        setTheme(state, action){
            state.theme=action.payload
        }
    }
    
})

export const themeSliceActions = themeSlice.actions

export default themeSlice


import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: {theme: localStorage.getItem('portfolio-theme') ? JSON.parse(localStorage.getItem('portfolio-theme')) : 'light'},
    reducers:{
        setTheme(state, action){
            state.theme=action.payload
            localStorage.setItem('portfolio-theme', JSON.stringify(state.theme))
        }
    }
    
})

export const themeSliceActions = themeSlice.actions

export default themeSlice


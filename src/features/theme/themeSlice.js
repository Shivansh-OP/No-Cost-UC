import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    initialTheme: 'light',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        themeChanger: (state) => {
            state.initialTheme = state.initialTheme === 'light' ? 'dark' : 'light';
        }
    },
});

export const { themeChanger } = themeSlice.actions;
export default themeSlice.reducer;
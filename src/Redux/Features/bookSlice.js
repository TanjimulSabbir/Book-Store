import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFeatured: "",
    all: ""
}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        featuredButton: (state, action) => {
            state.isFeatured = action.payload;
        },
        allButton: (state, action) => {
            state.all = action.payload;
        }

    }
})
export const { featuredButton, allButton } = bookSlice.actions;
export default bookSlice.reducer;
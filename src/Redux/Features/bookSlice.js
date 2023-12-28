import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFeatured: "",
    all: "",
    searchText: ""
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
        },
        searchInput: (state, action) => {
            state.searchText = action.payload;
        },

    }
})
export const { featuredButton, allButton, searchInput } = bookSlice.actions;
export default bookSlice.reducer;
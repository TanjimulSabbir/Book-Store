import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFeatured: "",
    searchText: ""
}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        featuredButton: (state, action) => {
            state.isFeatured = action.payload;
        },
        searchInput: (state, action) => {
            state.searchText = action.payload;
        },

    }
})
export const { featuredButton, searchInput } = bookSlice.actions;
export default bookSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import booksData from "../../assets/data/books.json"

export const initialState = {
    books: [...booksData.books]
}

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state, action) => {
            const newBook = action.payload.data;
            newBook.id = Math.max(...state.books.map(book => book.id), 0)
            state.books.push(newBook);
        },
        editBook: (state, action) => {
            const { id, data } = action.payload;
            const index = state.books.findIndex(book => book.id === id);

            if (index !== -1) {
                // Update the book if found
                state.books[index] = { ...state.books[index], ...data };
            }
        },
        deleteBook: (state, action) => {
            // Filter out the book with the specified ID
            state.books = state.books.filter(book => book.id !== action.payload);
        },
        selectedBook: (state, action) => {
            const index = state.books.find(book => book.id == 1);
            console.log(index)
            return selectedBook
        }
    }
})
export const { addBook, editBook, deleteBook, selectedBook } = booksSlice.actions;
export default booksSlice.reducer;
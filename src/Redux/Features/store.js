import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./Api/apiSlice";
import bookSlice from "./bookSlice";


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        bookReducer: bookSlice,
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
});

export default store;
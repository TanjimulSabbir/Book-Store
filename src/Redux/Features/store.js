import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './Api/apiSlice';

const store = configureStore({
    [apiSlice.reducerPath]: apiSlice.reducer
});

export default store;
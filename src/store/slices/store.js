import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorite";
import moviesReducer from "./movies"

const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        movies: moviesReducer
    },
});

export default store;

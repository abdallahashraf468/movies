import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
 name: 'favorites',
 initialState:{favorite:[]},
 reducers:{
    addToFavorites: (state,action ) => {
        if(action.payload)
        state.favorite.push(action.payload)
    },
    removeFromFavorites: (state,action) => {

        state.favorite = state.favorite.filter((movies => movies.id !== action.payload)) 

    }
}
 
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

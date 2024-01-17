import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from './../../axiosConfig/instance';

export const moviesAction = createAsyncThunk("movies/moviesAction", async (page) => {
    try {
        var res = await axiosInstance.get(`/popular?/&page=${page}`)
        return res.data.results 
    } catch (err) {
        throw err;
    }

})

const moviesSlice = createSlice({
    name: "movies",
    initialState: [],
    reducers: {},
    extraReducers: (myMovies) => [
        myMovies.addCase(moviesAction.fulfilled, (state, action) => {
            return action.payload;
        })
    ]
})
export default moviesSlice.reducer;
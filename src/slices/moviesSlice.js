import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [], // Array to store all movies fetched from APIs
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setAllMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

export const { setAllMovies } = moviesSlice.actions;

export const selectAllMovies = (state) => state.movies.movies;

export default moviesSlice.reducer;

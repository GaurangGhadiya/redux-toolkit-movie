import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMonvies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { addMonvies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;

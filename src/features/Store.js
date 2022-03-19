import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "features/Movies/MovieSlice";

export const Store = configureStore({
  reducer: { movies: movieReducer },
});

import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "features/Movies/MovieSlice";
import loginReducer from "features/Auth/LoginSlice";

export const Store = configureStore({
  reducer: { movies: movieReducer, login: loginReducer },
});

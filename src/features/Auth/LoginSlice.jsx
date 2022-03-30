import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : {},
};
console.log("userInfo", initialState?.userInfo);
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.userInfo = payload;
    },
    updateProfile: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
});

export const { loginUser, updateProfile } = loginSlice.actions;
export const getUser = (state) => state.login.userInfo;
export default loginSlice.reducer;

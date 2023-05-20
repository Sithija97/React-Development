import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Sithija" },
  { id: "1", name: "Shehara" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;

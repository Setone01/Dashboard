import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersData: [],
  userInfo: null,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {

    //add user to the table
    addUser: (state, action) => {
      state.usersData = action.payload;
    },

    // delete user
    deleteUser: (state, action) => {
      state.usersData = action.payload;
    },

    //edit profile
    editProfile: (state, action) => {
      state.usersData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, deleteUser, editProfile } = dashboardSlice.actions;

export default dashboardSlice.reducer;

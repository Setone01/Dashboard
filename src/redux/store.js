import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./dashoardSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});

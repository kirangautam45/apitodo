import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../api/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

// Importing configureStore from redux toolkit
import { configureStore } from "@reduxjs/toolkit";
// Importing authReducer from authSlice.
import authReducer from "../features/auth/authSlice";

// Exporting store which will contain configureStore and a reducer inside it.
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

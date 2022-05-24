// Importing configureStore from redux toolkit
import { configureStore } from "@reduxjs/toolkit";
// Importing authReducer from authSlice.
import authReducer from "../features/auth/authSlice";
import analyticReducer from "../features/analytics/analyticSlice";

// Exporting store which will contain configureStore and a reducer inside it.
export const store = configureStore({
  reducer: {
    auth: authReducer,
    analytics: analyticReducer,
  },
});

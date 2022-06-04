// Importing createSlice and createAsyncThunk from redux tooklit.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Importing the authservice we created.
import logService from "./logService";

// This is the initial state of the logs.
const initialState = {
  logs: [],
  logError: false,
  logSuccess: false,
  logIsLoading: false,
  logMessage: "",
};

// Get all logs
export const getLogs = createAsyncThunk("logs/getAll", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.admin.token;
    return await logService.getLogs(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Delete user
// export const deleteUser = createAsyncThunk(
//   "user/delete",
//   async (id, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.admin.token;
//       return await authService.deleteUser(id, token);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// Exporting the logSlice.
export const logSlice = createSlice({
  name: "logs",
  initialState,
  // Here the reducer functions will not be asynchronous.
  reducers: {
    // Here in the reset function, we are basically resetting all the function to its default initial state.
    reset: (state) => {
      state.logs = [];
      state.logIsLoading = false;
      state.logError = false;
      state.logSuccess = false;
      state.logMessage = "";
    },
  },
  // Here all the functions will be asynchronous.
  extraReducers: (builder) => {
    builder
      // Register Cases
      .addCase(getLogs.pending, (state) => {
        state.logIsLoading = true;
        state.logError = false;
        state.logSuccess = false;
        state.logMessage = "";
      })
      .addCase(getLogs.fulfilled, (state, action) => {
        state.logIsLoading = false;
        state.logError = false;
        state.logSuccess = true;
        state.logMessage = "";
        state.logs = action.payload;
      })
      .addCase(getLogs.rejected, (state, action) => {
        state.logIsLoading = false;
        state.logError = true;
        state.logSuccess = false;
        state.logMessage = action.payload;
      });
  },
});

// Whatever we put in the 'reset', we have to export it from the authSlice.actions section so that we can bring this reset into components where we can fire this off.
export const { reset } = logSlice.actions;

// Exporting the logSlice.reducer
export default logSlice.reducer;

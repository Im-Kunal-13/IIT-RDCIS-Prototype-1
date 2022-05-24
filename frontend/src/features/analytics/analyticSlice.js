// Importing createSlice and createAsyncThunk from redux tooklit.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Importing the analyticservice we created.
import analyticService from "./analyticService";

// This is the initial state of the application.
const initialState = {
  data: [],
  dataError: false,
  dataSuccess: false,
  dataIsLoading: false,
  dataMessage: "",
};

// Get all analytics data.
export const getData = createAsyncThunk(
  "analytics/getData",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.admin.token;
      return await analyticService.getData(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Exporting the analyticSlice.
export const analyticSlice = createSlice({
  name: "analytics",
  initialState,
  // Here the reducer functions will not be asynchronous.
  reducers: {
    // Here in the reset function, we are basically resetting all the function to its default initial state.
    reset: (state) => {
      state.dataError = false;
      state.dataSuccess = false;
      state.dataIsLoading = false;
      state.dataMessage = "";
    },
  },
  // Here all the functions will be asynchronous.
  extraReducers: (builder) => {
    builder
      // Register Cases
      .addCase(getData.pending, (state) => {
        state.dataIsLoading = true;
        state.dataError = false;
        state.dataSuccess = false;
        state.dataMessage = "";
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.dataIsLoading = false;
        state.dataError = false;
        state.dataSuccess = true;
        state.dataMessage = "";
        state.data = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        state.dataIsLoading = false;
        state.dataError = true;
        state.dataSuccess = false;
        state.dataMessage = action.payload;
      });
  },
});

// Whatever we put in the 'reset', we have to export it from the analyticSlice.actions section so that we can bring this reset into components where we can fire this off.
export const {
  reset
} = analyticSlice.actions;

// Exporting the analyticSlice.reducer
export default analyticSlice.reducer;

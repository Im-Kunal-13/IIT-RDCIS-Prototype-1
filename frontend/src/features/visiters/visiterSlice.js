import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import visiterService from "./visiterService";

const initialState = {
  visiters: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new visiter
export const setVisiter = createAsyncThunk(
  "visiters/create",
  async (visiterData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.admin.token;
      return await visiterService.setVisiter(visiterData, token);
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

// Get new visiters
export const getVisiters = createAsyncThunk(
  "visiters/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.admin.token;
      return await visiterService.getVisiters(token);
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

export const visiterSlice = createSlice({
  name: "visiter",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(setVisiter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setVisiter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.visiters.push(action.payload);
      })
      .addCase(setVisiter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getVisiters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVisiters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.visiters = action.payload;
      })
      .addCase(getVisiters.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = visiterSlice.actions;
export default visiterSlice.reducer;

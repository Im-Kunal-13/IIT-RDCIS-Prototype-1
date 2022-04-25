import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "./adminService";

const initialState = {
  admins: [],
  adminsIsError: false,
  adminsIsSuccess: false,
  adminsIsLoading: false,
  adminsMessage: "",
};

// Get all admins
export const getAdmins = createAsyncThunk(
  "admins/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.admin.token;
      return await adminService.getAdmins(token);
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

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    resetAdmins: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdmins.pending, (state) => {
        state.adminsIsLoading = true;
      })
      .addCase(getAdmins.fulfilled, (state, action) => {
        state.adminsIsLoading = false;
        state.adminsIsSuccess = true;
        state.admins = action.payload;
      })
      .addCase(getAdmins.rejected, (state, action) => {
        state.adminsIsLoading = false;
        state.adminsIsError = true;
        state.adminsMessage = action.payload;
      });
  },
});

export const { resetAdmins } = adminSlice.actions;
export default adminSlice.reducer;

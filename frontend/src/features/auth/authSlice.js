// Importing createSlice and createAsyncThunk from redux tooklit.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Importing the authservice we created.
import authService from "./authService";

// Getting admin from local storage.
const admin = JSON.parse(localStorage.getItem("admin"));

// This is the initial state of the application.
const initialState = {
  // If admin is there then keep the value or set it to null.
  admin: admin ? admin : null,
  // If we get an error from our server then we will set this accordingly.
  loginError: false,
  loginSuccess: false,
  loginIsLoading: false,
  loginMessage: "",
  registerError: false,
  registerSuccess: false,
  registerIsLoading: false,
  registerMessage: "",
};

// Register Admin.
// This will be triggered in the front-end.
export const register = createAsyncThunk(
  "auth/register",
  async (admin, thunkAPI) => {
    try {
      return await authService.register(admin);
    } catch (error) {
      const loginMessage =
        (error.response &&
          error.response.data &&
          error.response.loginMessage) ||
        error.loginMessage ||
        error.toString();

      return thunkAPI.rejectWithValue(loginMessage);
    }
  }
);

// Login Admin.
export const login = createAsyncThunk("auth/login", async (admin, thunkAPI) => {
  try {
    return await authService.login(admin);
  } catch (error) {
    const loginMessage =
      (error.response && error.response.data && error.response.loginMessage) ||
      error.loginMessage ||
      error.toString();

    console.log("error you");
    return thunkAPI.rejectWithValue(loginMessage);
  }
});

// Exporting logout.
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

// Exporting the authSlice.
export const authSlice = createSlice({
  name: "auth",
  initialState,
  // Here the reducer functions will not be asynchronous.
  reducers: {
    // Here in the reset function, we are basically resetting all the function to its default initial state.
    reset: (state) => {
      state.loginIsLoading = false;
      state.loginError = false;
      state.loginSuccess = false;
      state.loginMessage = "";
      state.registerError = false;
      state.registerSuccess = false;
      state.registerIsLoading = false;
      state.registerMessage = "";
    },
  },
  // Here all the functions will be asynchronous.
  extraReducers: (builder) => {
    builder
      // Register Cases
      .addCase(register.pending, (state) => {
        state.registerIsLoading = true;
        state.registerError = false;
        state.registerSuccess = false;
        state.registerMessage = "";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.registerIsLoading = false;
        state.registerError = false;
        state.registerSuccess = true;
        state.registerMessage = "";
      })
      .addCase(register.rejected, (state, action) => {
        state.registerIsLoading = false;
        state.registerError = true;
        state.registerSuccess = false;
        state.registerMessage = action.payload;
      })
      // Login Cases
      .addCase(login.pending, (state) => {
        state.loginIsLoading = true;
        state.loginError = true;
        state.loginError = false;
        state.loginSuccess = false;
        state.loginMessage = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginError = false;
        state.loginError = false;
        state.loginSuccess = true;
        state.loginMessage = "";
        state.admin = admin;
      })
      .addCase(login.rejected, (state, action) => {
        state.loginError = false;
        state.loginError = true;
        state.loginSuccess = false;
        state.loginMessage = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.admin = null;
      });
  },
});

// Whatever we put in the 'reset', we have to export it from the authSlice.actions section so that we can bring this reset into components where we can fire this off.
export const { reset } = authSlice.actions;

// Exporting the authSlice.reducer
export default authSlice.reducer;

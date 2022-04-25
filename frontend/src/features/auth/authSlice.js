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
  admins: [],
  // If we get an error from our server then we will set this accordingly.
  loginError: false,
  loginSuccess: false,
  loginIsLoading: false,
  loginMessage: "",
  registerError: false,
  registerSuccess: false,
  registerIsLoading: false,
  registerMessage: "",
  adminsIsError: false,
  adminsIsSuccess: false,
  adminsIsLoading: false,
  adminsMessage: "",
};

// Get all users
export const getUsers = createAsyncThunk(
  "admins/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.admin.token;
      return await authService.getUsers(token);
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
      state.adminsIsError = false;
      state.adminsIsSuccess = false;
      state.adminsIsLoading = false;
      state.adminsMessage = "";
      state.admins = []
    },
    resetRegister: (state) => {
      state.registerSuccess = false;
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
        state.admins.push(action.payload)
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
        state.loginSuccess = true;
        state.loginMessage = "";
        state.loginIsLoading = false;
        state.admin = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loginError = false;
        state.loginError = true;
        state.loginSuccess = false;
        state.loginIsLoading = false;
        state.loginMessage = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.admin = null;
      })
      .addCase(getUsers.pending, (state) => {
        state.adminsIsLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.adminsIsLoading = false;
        state.adminsIsSuccess = true;
        state.admins = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.adminsIsLoading = false;
        state.adminsIsError = true;
        state.adminsMessage = action.payload;
      });
  },
});

// Whatever we put in the 'reset', we have to export it from the authSlice.actions section so that we can bring this reset into components where we can fire this off.
export const { reset, resetRegister } = authSlice.actions;

// Exporting the authSlice.reducer
export default authSlice.reducer;

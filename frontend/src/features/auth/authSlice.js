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
  deleteUserError: false,
  deleteUserSuccess: false,
  deleteUserLoading: false,
  deleteUserMessage: "",
  deleteSelfError: false,
  deleteSelfSuccess: false,
  deleteSelfLoading: false,
  deleteSelfMessage: "",
  updateUserError: false,
  updateUserSuccess: false,
  updateUserLoading: false,
  updateUserMessage: "",
  verifyUserError: false,
  verifyUserSuccess: false,
  verifyUserLoading: false,
  verifyUserMessage: "",
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

// Login Admin.
export const verifyUser = createAsyncThunk(
  "auth/verify",
  async (admin, thunkAPI) => {
    try {
      return await authService.verifyUser(admin);
    } catch (error) {
      const loginMessage =
        (error.response &&
          error.response.data &&
          error.response.loginMessage) ||
        error.loginMessage ||
        error.toString();

      console.log("error you");
      return thunkAPI.rejectWithValue(loginMessage);
    }
  }
);

// Exporting logout.
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

// Delete user
export const updateUser = createAsyncThunk(
  "user/update",
  async ({ id, user }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.admin.token;
      return await authService.updateUser(id, user, token);
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

// Delete user
export const deleteUser = createAsyncThunk(
  "user/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.admin.token;
      return await authService.deleteUser(id, token);
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

// Delete self
export const deleteSelf = createAsyncThunk(
  "self/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.admin.token;
      return await authService.deleteUser(id, token);
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
      state.admins = [];
    },
    resetRegister: (state) => {
      state.registerSuccess = false;
    },
    resetVerifyUser: (state) => {
      state.verifyUserSuccess = false;
    },
    resetUpdateUser: (state) => {
      state.updateUserSuccess = false;
    },
    resetDeleteUser: (state) => {
      state.deleteUserSuccess = false
    },
    resetDeleteSelf: (state) => {
      state.deleteSelfSuccess = false
    },
    resetLoginSuccess: (state) => {
      state.loginSuccess = false
    }
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
        state.admins.push(action.payload);
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
      // VERITY CASES
      .addCase(verifyUser.pending, (state) => {
        state.verifyUserLoading = true;
      })
      .addCase(verifyUser.fulfilled, (state) => {
        state.verifyUserSuccess = true;
        state.verifyUserLoading = false;
      })
      .addCase(verifyUser.rejected, (state, action) => {
        state.verifyUserError = true;
        state.verifyUserSuccess = false;
        state.verifyUserLoading = false;
        state.verifyUserMessage = action.payload;
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
        state.admins = action.payload.filter(
          (user) => user._id !== state.admin._id
        );
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.adminsIsLoading = false;
        state.adminsIsError = true;
        state.adminsMessage = action.payload;
      })
      .addCase(deleteUser.pending, (state) => {
        state.deleteUserLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.deleteUserLoading = false;
        state.deleteUserSuccess = true;
        state.admins = state.admins.filter(
          (user) => user._id !== action.payload.id
        );
        if (state.admin._id === action.payload.id) {
          state.admin = null;
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.deleteUserLoading = false;
        state.deleteUserError = true;
        state.deleteUserMessage = action.payload;
      })
      .addCase(deleteSelf.pending, (state) => {
        state.deleteSelfLoading = true;
      })
      .addCase(deleteSelf.fulfilled, (state, action) => {
        state.deleteSelfLoading = false;
        state.deleteSelfSuccess = true;
        if (state.admin._id === action.payload.id) {
          state.admin = null;
        }
      })
      .addCase(deleteSelf.rejected, (state, action) => {
        state.deleteSelfLoading = false;
        state.deleteSelfError = true;
        state.deleteSelfMessage = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.updateUserLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.updateUserLoading = false;
        state.updateUserSuccess = true;
        state.admins = state.admins.map((user) => {
          if (user._id === action.payload.user._id) {
            return action.payload.user;
          } else {
            return user;
          }
        });
        if (state.admin._id === action.payload.user._id) {
          state.admin = action.payload.user;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.updateUserSuccess = false;
        state.updateUserLoading = false;
        state.updateUserError = true;
        state.updateUsermessage = action.payload;
      });
  },
});

// Whatever we put in the 'reset', we have to export it from the authSlice.actions section so that we can bring this reset into components where we can fire this off.
export const { reset, resetRegister, resetVerifyUser, resetUpdateUser, resetDeleteUser,resetLoginSuccess, resetDeleteSelf } =
  authSlice.actions;

// Exporting the authSlice.reducer
export default authSlice.reducer;

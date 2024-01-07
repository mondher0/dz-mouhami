import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/auth-slice";

export const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    auth: authReducer,
  },
});

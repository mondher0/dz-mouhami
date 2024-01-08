import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeStep: 0,
  position: [36.66364005190085, 4.91335013512071],
  disponibility: [
    {
      id: 1,
      day: "Dim",
      hours: ["8:00-10:00"],
    },
    {
      id: 1,
      day: "Lun",
      hours: [],
    },
    {
      id: 1,
      day: "Mar",
      hours: [],
    },
    {
      id: 1,
      day: "Mer",
      hours: [],
    },
    {
      id: 1,
      day: "Jeu",
      hours: [],
    },
    {
      id: 1,
      day: "Ven",
      hours: [],
    },
    {
      id: 1,
      day: "Sam",
      hours: [],
    },
  ],
  fullName: "",
  email: "",
  password: "",
  roles: "",
  skils: "",
  bio: "",
  cv: "",
  jobTitle: "",
  externalLinks: "",
};

// register
export const register = createAsyncThunk(
  "auth/register",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post("/register", user);
      console.log(response);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// login
export const login = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post("/login", user);
      console.log(response);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { payload } = action;
      const { name, value } = payload;
      state[name] = value;
    },
    setActivStep: (state, action) => {
      state.activeStep = action.payload;
    },
    setPostion: (state, action) => {
      state.position = action.payload;
    },
    setDisponibility: (state, action) => {
      console.log(action);
      const { payload } = action;
      const { day, hour } = payload;
      const index = state.disponibility.findIndex((d) => d.day === day);
      // verif if the hour exist in the array of hours we delete it
      const indexHour = state.disponibility[index].hours.indexOf(hour.hour);
      if (indexHour !== -1) {
        state.disponibility[index].hours.splice(indexHour, 1);
      } else {
        state.disponibility[index].hours.push(hour.hour);
      }
      console.log(state.disponibility);
    },
  },
});
export const { setUser, setActivStep, setPostion, setDisponibility } =
  authSlice.actions;
export default authSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../lib/utils";
import axios from "axios";
import { setCookie } from "cookies-next";

const initialState = {
  activeStep: 0,
  position: [36.66364005190085, 4.91335013512071],
  disponibility: [
    {
      id: 1,
      day: "Dim",
      hours: [],
    },
    {
      id: 2,
      day: "Lun",
      hours: [],
    },
    {
      id: 3,
      day: "Mar",
      hours: [],
    },
    {
      id: 4,
      day: "Mer",
      hours: [],
    },
    {
      id: 5,
      day: "Jeu",
      hours: [],
    },
    {
      id: 6,
      day: "Ven",
      hours: [],
    },
    {
      id: 7,
      day: "Sam",
      hours: [],
    },
  ],
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phone: "",
  address: "",
  description: "",
  social: "",
  wilaya: "",
  commune: "",
  social: "",
  categorieId: null,
  certificat: null,
  loading: false,
  error: false,
};

// check email
export const checkEmail = createAsyncThunk(
  "auth/checkEmail",
  async (user, { rejectWithValue }) => {
    try {
      console.log(user);
      const { email } = user;
      const response = await axios.post(`${baseUrl}auth/check-email`, {
        email: email,
      });
      console.log(response);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// register
export const register = createAsyncThunk(
  "auth/register",
  async (user, { rejectWithValue }) => {
    try {
      console.log(user);
      const {
        firstName,
        lastName,
        email,
        password,
        phone,
        address,
        description,
        social,
        wilaya,
        commune,
        categorieId,
        certificat,
        position,
      } = user;
      console.log(user);
      const formData = new FormData();
      formData.append("certificat", certificat);
      formData.append("fname", firstName);
      formData.append("lname", lastName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("phone", phone);
      formData.append("address", address);
      formData.append("description", description);
      formData.append("social", social);
      formData.append("wilaya_id", wilaya);
      formData.append("city_id", commune);
      formData.append("longitude", position[1]);
      formData.append("latitude", position[0]);
      formData.append("categorie_id", categorieId);

      const response = await axios.post(
        `${baseUrl}auth/register-lawyer`,
        formData,
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  },
);

// login
export const login = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    console.log(user);
    const { email, password } = user;
    try {
      const response = await axios.post(`${baseUrl}auth/login`, {
        email: email,
        password: password,
      });
      console.log(response.data);
      setCookie("token", response.data.token);
      if (typeof window === "undefined") return;
      window.location.href = "/loyer/10";
      return response.data;
    } catch (error) {
      console.log(error);
      console.log(error.response.data.detail);
      return rejectWithValue(error.response.data.detail);
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
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
      state.activeStep = 2;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.activeStep = 2;
    });
    builder.addCase(checkEmail.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(checkEmail.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
      state.activeStep = 1;
    });
    builder.addCase(checkEmail.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
      state.activeStep = 1;
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { setUser, setActivStep, setPostion, setDisponibility } =
  authSlice.actions;
export default authSlice.reducer;

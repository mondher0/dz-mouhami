import axiosInstance, { baseUrl } from "../../../lib/utils";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  profileState: "PROFILE_SETTINGS",
  email: "",
  firstName: "",
  lastName: "",
  wilaya: "",
  commune: "",
  phone: "",
  description: "",
  address: "",
  speciality: "",
  position: [],
  password: "",
  loading: false,
  error: false,
};

// update loyer
export const updateLoyer = createAsyncThunk(
  "profile/update",
  async (user, { rejectWithValue }) => {
    console.log(user);
    const { name, email, phone, address, password } = user;
    const data = {
      name: name,
      email: email,
      phone: phone,
      address: address,
    };
    if (password) {
      data.password = password;
    }
    try {
      const response = await axiosInstance.patch(
        `${baseUrl}lawyers/lawyer/update`,
        data,
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.detail);
    }
  },
);
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileState(state, action) {
      state.profileState = action.payload;
    },
    setProfileInfo(state, action) {
      console.log(action);
      const { payload } = action;
      state.email = payload?.email;
      state.firstName = payload?.fname;
      state.lastName = payload?.lname;
      state.wilaya = payload?.lawyer[0].wilaya_id;
      state.commune = payload?.lawyer[0].city_id;
      state.phone = payload?.lawyer[0].phone;
      state.description = payload?.lawyer[0].description;
      state.address = payload?.lawyer[0].address;
      state.speciality = payload?.lawyer[0].categorie.name;
      state.position = [
        payload?.lawyer[0].latitude,
        payload?.lawyer[0].longitude,
      ];
    },
    editProfileInfo(state, action) {
      const { payload } = action;
      const { name, value } = payload;
      state[name] = value;
    },
    setPostion: (state, action) => {
      state.position = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateLoyer.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
    });
    builder.addCase(updateLoyer.rejected, (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = "Something went wrong";
    });
    builder.addCase(updateLoyer.pending, (state, action) => {
      console.log(action);
      state.loading = true;
    });
  },
});
export const { setProfileState, setProfileInfo, editProfileInfo, setPostion } =
  profileSlice.actions;
export default profileSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detail: [],
  user: [],
  useruid: null,
  mobile: null,
  smallBasket: false,
  smallProfile: false,
  smallLogin: false,
};

export const detailSlice = createSlice({
  name: "detail",
  initialState,

  reducers: {
    productLoader: (state, action) => {
      state.detail = action.payload;
    },

    SET_USER: (state, action) => {
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    },
    SET_USERLOGOUT: (state, action) => {
      return {
        ...state,
        user: [],
      };
    },
    SET_USERUID: (state, action) => {
      return {
        ...state,
        useruid: action.payload,
      };
    },
    SET_USER_MOBILE: (state, action) => {
      state.mobile = action.payload;
    },
    SMALL_BASKET: (state, action) => {
      state.smallBasket = action.payload;
    },
    SMALL_PROFILE: (state, action) => {
      state.smallProfile = action.payload;
    },
    SMALL_LOGIN: (state, action) => {
      state.smallLogin = action.payload;
    },
  },
});

export const {
  productLoader,
  SET_USER,
  SET_USER_MOBILE,
  SET_USERUID,
  SMALL_BASKET,
  SMALL_PROFILE,
  SMALL_LOGIN,
  SET_USERLOGOUT,
} = detailSlice.actions;

export const selectDetails = (state) => state.detail.detail;
export const selectUser = (state) => state.detail.user;
export const selectUserUid = (state) => state.detail.useruid;
export const selectMobile = (state) => state.detail.mobile;
export const selectsmallbasket = (state) => state.detail.smallBasket;
export const selectsmallprofile = (state) => state.detail.smallProfile;
export const selectsmalllogin = (state) => state.detail.smallLogin;

export default detailSlice.reducer;

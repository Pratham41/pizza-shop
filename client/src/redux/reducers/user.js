import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LOGOUT,
  OTP_SEND_REQUEST,
  OTP_SEND_FAIL,
  OTP_SEND_SUCCESS,
  OTP_VERIFY_REQUEST,
  OTP_VERIFY_FAIL,
  OTP_VERIFY_SUCCESS,
} from "../constants/user";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userListReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const sendOtpReducer = (state = {}, action) => {
  switch (action.type) {
    case OTP_SEND_REQUEST:
      return { loadingSendOtp: true };
    case OTP_SEND_SUCCESS:
      return { loadingSendOtp: false, successSendOtp: action.payload };
    case OTP_SEND_FAIL:
      return { loadingSendOtp: false, errorSendOtp: action.payload };
    default:
      return state;
  }
};

export const otpVerifyReducer = (state = {}, action) => {
  switch (action.type) {
    case OTP_VERIFY_REQUEST:
      return { loadingVerifyOtp: true };
    case OTP_VERIFY_SUCCESS:
      return { loadingVerifyOtp: false, successVerifyOtp: action.payload };
    case OTP_VERIFY_FAIL:
      return { loadingVerifyOtp: false, errorVerifyOtp: action.payload };
    default:
      return state;
  }
};

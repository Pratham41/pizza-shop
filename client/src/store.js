import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  userListReducer,
  sendOtpReducer,
  otpVerifyReducer,
} from "./redux/reducers/user";

import {
  listAllRegularPizzaReducer,
  listAllCheeseReducer,
  listAllMeatReducer,
  listAllPizzaBaseReducer,
  listAllSauceReducer,
  listAllVeggiesReducer,
  selectedItemsReducer
} from "./redux/reducers/pizza";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
  sendOtp: sendOtpReducer,
  verifyOtp: otpVerifyReducer,
  listRegularPizza: listAllRegularPizzaReducer,
  listCheese: listAllCheeseReducer,
  listMeat: listAllMeatReducer,
  listBase: listAllPizzaBaseReducer,
  listSauce: listAllSauceReducer,
  listVeggies: listAllVeggiesReducer,
  selectedItems : selectedItemsReducer
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

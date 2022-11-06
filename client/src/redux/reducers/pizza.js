import {
  REGULAR_PIZZA_LIST_FAIL,
  REGULAR_PIZZA_LIST_REQUEST,
  REGULAR_PIZZA_LIST_SUCCESS,
  PIZZA_BASE_LIST_REQUEST,
  PIZZA_BASE_LIST_SUCCESS,
  PIZZA_BASE_LIST_FAIL,
  SAUCE_LIST_REQUEST,
  SAUCE_LIST_SUCCESS,
  SAUCE_LIST_FAIL,
  CHEESE_LIST_REQUEST,
  CHEESE_LIST_SUCCESS,
  CHEESE_LIST_FAIL,
  MEAT_LIST_REQUEST,
  MEAT_LIST_SUCCESS,
  MEAT_LIST_FAIL,
  VEGGIES_LIST_REQUEST,
  VEGGIES_LIST_SUCCESS,
  VEGGIES_LIST_FAIL,
} from "../constants/pizza";

export const listAllRegularPizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case REGULAR_PIZZA_LIST_REQUEST:
      return { loading: true };
    case REGULAR_PIZZA_LIST_SUCCESS:
      return { loading: false, allPizzas: action.payload };
    case REGULAR_PIZZA_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listAllPizzaBaseReducer = (state = {}, action) => {
  switch (action.type) {
    case PIZZA_BASE_LIST_REQUEST:
      return { loadingBases: true };
    case PIZZA_BASE_LIST_SUCCESS:
      return { loadingBases: false, allPizzaBases: action.payload };
    case PIZZA_BASE_LIST_FAIL:
      return { loadingBases: false, errorBases: action.payload };
    default:
      return state;
  }
};

export const listAllSauceReducer = (state = {}, action) => {
  switch (action.type) {
    case SAUCE_LIST_REQUEST:
      return { loadingSauces: true };
    case SAUCE_LIST_SUCCESS:
      return { loadingSauces: false, allSauces: action.payload };
    case SAUCE_LIST_FAIL:
      return { loadingSauces: false, errorSauces: action.payload };
    default:
      return state;
  }
};

export const listAllCheeseReducer = (state = {}, action) => {
  switch (action.type) {
    case CHEESE_LIST_REQUEST:
      return { loadingCheese: true };
    case CHEESE_LIST_SUCCESS:
      return { loadingCheese: false, allCheese: action.payload };
    case CHEESE_LIST_FAIL:
      return { loadingCheese: false, errorCheese: action.payload };
    default:
      return state;
  }
};

export const listAllMeatReducer = (state = {}, action) => {
  switch (action.type) {
    case MEAT_LIST_REQUEST:
      return { loadingMeat: true };
    case MEAT_LIST_SUCCESS:
      return { loadingMeat: false, allMeat: action.payload };
    case MEAT_LIST_FAIL:
      return { loadingMeat: false, errorMeat: action.payload };
    default:
      return state;
  }
};

export const listAllVeggiesReducer = (state = {}, action) => {
  switch (action.type) {
    case VEGGIES_LIST_REQUEST:
      return { loadingVeggies: true };
    case VEGGIES_LIST_SUCCESS:
      return { loadingVeggies: false, allVeggies: action.payload };
    case VEGGIES_LIST_FAIL:
      return { loadingVeggies: false, errorVeggies: action.payload };
    default:
      return state;
  }
};

export const selectedItemsReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_REQUEST":
      console.log('jug',state);
      console.log('payload',action.payload);
      return { values: { ...state.values, ...action.payload.values } };
    default:
      return state;
  }
};

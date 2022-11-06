import axios from "axios";

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

export const listOfRegularPizza = () => async (dispatch, getState) => {
  try {
    dispatch({ type: REGULAR_PIZZA_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get("api/pizza/getAllRegularPizza", config);
    dispatch({ type: REGULAR_PIZZA_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REGULAR_PIZZA_LIST_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const listOfPizzaBase = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PIZZA_BASE_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get("api/pizza/getAllPizzaBases", config);
    dispatch({ type: PIZZA_BASE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PIZZA_BASE_LIST_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const listOfSauces = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SAUCE_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get("api/pizza/getAllSauces", config);
    dispatch({ type: SAUCE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SAUCE_LIST_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const listOfCheese = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CHEESE_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get("api/pizza/getAllCheese", config);
    dispatch({ type: CHEESE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CHEESE_LIST_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const listOfMeat = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MEAT_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get("api/pizza/getAllMeat", config);
    dispatch({ type: MEAT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MEAT_LIST_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const listOfVeggies = () => async (dispatch, getState) => {
  try {
    dispatch({ type: VEGGIES_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get("api/pizza/getAllVeggies", config);
    dispatch({ type: VEGGIES_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: VEGGIES_LIST_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

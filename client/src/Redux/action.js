import axios from "axios";

export function getProducts() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/products");
    return dispatch({ type: "GET_PRODUCTS", payload: response.data });
  };
}

export function filterProducts(payload) {
  return {
    type: "FILTER_PRODUCTS",
    payload,
  };
}

export function orderProducts(payload) {
  return {
    type: "ORDER_PRODUCTS",
    payload,
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/products/${id}`);
    return dispatch({ type: "GET_DETAIL", payload: response.data });
  };
}

export function addProduct(payload) {
  return {
    type: "ADD_PRODUCT",
    payload,
  };
}

export function removeProduct(payload) {
  return {
    type: "REMOVE_PRODUCT",
    payload,
  };
}

export function getUser() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/users/");
    return dispatch({ type: "GET_USER", payload: response.data });
  };
}

export function postUser(payload) {
  return async function (dispatch) {
    const response = await axios.post("http://localhost:3001/users/", payload);
    return dispatch({ type: "POST_USER", payload: response.data });
  };
}

export function postProduct(payload) {
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/products/",
      payload
    );
    return dispatch({ type: "POST_PRODUCT", payload: response.data });
  };
}

export function postCategory(payload) {
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/category/",
      payload
    );
    return dispatch({ type: "POST_CATEGORY", payload: response.data });
  };
}

export function getNameProduct(payload) {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/products/name/${payload}`
    );
    return dispatch({ type: "GET_NAME_PRODUCT", payload: response.data });
  };
}

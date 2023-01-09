import axios from 'axios';

export async function getProducts(){
    return async function(dispatch){
        const response = await axios.get('http://localhost:3001/api/product');
        return dispatch({type: "GET_PRODUCTS", payload: response.data})
        
        
    }
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

export function getDetail(id){
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/api/product/${id}`);
        return dispatch({type: "GET_DETAIL", payload: response.data})
    }
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

export function getUser(){
    return async function(dispatch){
        const response = await axios.get('http://localhost:3001/api/users/');
        return dispatch({type: "GET_USER", payload: response.data})
    }
}

export function postUser(payload){
    return async function(dispatch){
        const response = await axios.post('http://localhost:3001/api/users/', payload);
        return dispatch({type: "POST_USER", payload: response.data})
    }
}

export function postProduct(payload){
    return async function(dispatch){
        const response = await axios.post('http://localhost:3001/api/product/', payload);
        return dispatch({type: "POST_PRODUCT", payload: response.data})
    }
}

export function postCategory(payload){
    return async function(dispatch){
        const response = await axios.post('http://localhost:3001/api/category/', payload);
        return dispatch({type: "POST_CATEGORY", payload: response.data})
    }
  };
};

export const signIn = (payload) => {
  return async function (dispatch) {
    try {
      const res = await axios.post("http://localhost:3001/signin", payload);
      alert(res.data.message);
      return dispatch({ type: "SIGN_IN", payload });
    } catch (error) {
      alert("Usuario incorrecto");
    }
  };
};


export function getNameProduct(payload){
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/api/product/name/${payload}`);
        return dispatch({type: "GET_NAME_PRODUCT", payload: response.data})
    }
  };
};

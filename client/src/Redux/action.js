import axios from "axios";

export function getProducts() {
  return async function (dispatch) {
    try {
      const response = await axios.get("/products");
      return dispatch({ type: "GET_PRODUCTS", payload: response.data });
    } catch (error) {
      return { error: error.message };
    }
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
    try {
      const response = await axios.get(`/products/${id}`);
      return dispatch({ type: "GET_DETAIL", payload: response.data });
    } catch (error) {
      return { error: error.message };
    }
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

export function getUsers() {
  return async function (dispatch) {
    try {
      const response = await axios.get("/users");
      return dispatch({ type: "GET_USERS", payload: response.data });
    } catch (error) {
      return { error: error.message };
    }
  };
}

export const putUser = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.put(`/users/${id}`);
      console.log(res)
      return dispatch({ type: "PUT_USER", payload: res.data });
    } catch (error) {
      console.log(error)
      return { error: error.message };
    }
  };
};

export function postUser(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/users", payload);
      return dispatch({ type: "POST_USER", payload: response.data });
    } catch (error) {
      return { error: error.message };
    }
  };
}

export function postProduct(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/products", payload);
      return dispatch({ type: "POST_PRODUCT", payload: response.data });
    } catch (error) {
      return { error: error.message };
    }
  };
}

export function filterProductsCategory(payload) {
  return {
    type: "FILTER_CATEGORY",
    payload,
  };
}
export function filterProductsBrand(payload) {
  return {
    type: "FILTER_BRAND",
    payload,
  };
}

export function postCategory(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/category", payload);
      return dispatch({ type: "POST_CATEGORY", payload: response.data });
    } catch (error) {
      return { error: error.message };
    }
  };
}

// export function getNameProduct(payload) {
//   return async function (dispatch) {
//     const response = await axios.get(
//       `http://localhost:3001/products/name/${payload}`
//     );
//     return dispatch({ type: "GET_NAME_PRODUCT", payload: response.data });
//   };
// }

export default function searchBarName(payload) {
  return {
    type: "SEARCH_BAR",
    payload,
  };
}

export function cleanFilter(payload) {
  return {
    type: "CLEAN_FILTER",
    payload,
  };
}

// login - authentication

export const signUp = (payload) => {
  return async function () {
    try {
      const res = await axios.post("/signup", payload);
      res.data.message !== undefined
        ? alert(res.data.message)
        : alert("Usuario creado correctamente");
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const signIn = (payload) => {
  return async function (dispatch) {
    try {
      const res = await axios.post("/signin", payload);
      res.data.message !== undefined
        ? alert(res.data.message)
        : alert("Inicio de sesión correcto");
      return dispatch({ type: "SIGN_IN", payload });
    } catch (error) {
      alert(error.request.response);
    }
  };
};

export const logOut = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get("/logout");
      return dispatch({ type: "LOG_OUT", payload: res.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

//filtro por precio maximo y minimo en el front

export function filterProductsPrice(payload) {
  return {
    type: "FILTER_PRICE",
    payload,
  };
}
export function putCalificationRating(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.put(
        `/products/rating/${payload._id}`,
        payload
      );
      return dispatch({ type: "PUT_RATING", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getCategories() {
  return async function (dispatch) {
    try {
      const response = await axios.get("/categories");
      return dispatch({ type: "GET_CATEGORIES", payload: response.data });
    } catch (error) {
      return { error: error.message };
    }
  };
}

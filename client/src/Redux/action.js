import axios from "axios";

// action to get all products
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

// action to get a specific product by ID
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

// action to create a new product
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

// action to update a existing product by its ID
export const putProduct = (id, data) => {
  return async function (dispatch) {
    try {
      const res = await axios.put(`/products/${id}`, data);
      return dispatch({ type: "PUT_PRODUCT", payload: res.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

// action to delete a existing product by its ID
export const deleteProduct = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.delete(`/products/${id}`);
      return dispatch({ type: "DELETE_PRODUCT", payload: res.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

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

// action to get all users
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

export const putUser = (id, data) => {
  return async function (dispatch) {
    try {
      const res = await axios.put(`/users/${id}`, data);
      return dispatch({ type: "PUT_USER", payload: res.data });
    } catch (error) {
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

export const deleteUser = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.delete(`/users/${id}`);
      return dispatch({ type: "USER_PRODUCT", payload: res.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

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

// action to register a user
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

// action to login a user
export const signIn = (payload) => {
  return async function (dispatch) {
    const id = localStorage.getItem("id")
    
    try {
      if(id){return dispatch({ type: "SIGN_IN", payload })
      }else{  const res = await axios.post("/signin", payload);
      res.data.message !== undefined
        ? alert(res.data.message)
        : alert("Inicio de sesión correcto");
      console.log(JSON.stringify(res.data[0].cart))
   localStorage.setItem("id", res.data[0]._id)
   localStorage.setItem("cart", JSON.stringify(res.data[0].cart))
  
  //  localStorage.setItem("cart", JSON.parse(res.data[0].cart))
  //  localStorage.setItem("id", res.data._id)
      return dispatch({ type: "SIGN_IN", payload })};
    } catch (error) {
      alert(error.request.response);
    }
  };
};

// action to log out a user
export const logOut = () => {
  return async function (dispatch) {
    try {
      localStorage.clear();
      const res = await axios.get("/logout");
      return dispatch({ type: "LOG_OUT", payload: res.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

// filter by maximum and minimun price on the front
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

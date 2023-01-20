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
      console.log(res);
      return dispatch({ type: "PUT_USER", payload: res.data });
    } catch (error) {
      console.log(error);
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

// action to log out a user
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


//guardar y traer el rating de un producto por id de producto

export function getRating(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/products/rating/${id}`);
      return dispatch({ type: "GET_RATING", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getReviews(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/products/reviews/${id}`);
      return dispatch({ type: "GET_REVIEWS", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function postReview(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/products/reviews", payload);
      return dispatch({ type: "POST_REVIEW", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

//enviar rating de productor por id de producto

export function putRating(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.put(`/products/rating/${payload._id}`, payload);
      return dispatch({ type: "PUT_RATING", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getComents(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/products/coments/${id}`);
      return dispatch({ type: "GET_COMENTS", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function postComent(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/products/coment", payload);
      return dispatch({ type: "POST_COMENT", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

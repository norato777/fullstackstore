const initialState = {
  products: [],
  allProducts: [],
  detail: {},
  cart: [],
  user: {},
  order: {},
  orders: [],
  reviews: [],
  categories: [],
  category: {},
  loading: false,
  error: null,
  success: false,
  message: null,
  token: null,
  logged: false,
  admin: false,
  search: "",
  filter: "",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
      };
    case "FILTER_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "ORDER_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: state.products.concat(action.payload),
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.payload),
      };

    case "GET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "GET_NAME_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };
    case "FILTER_CATEGORY":
      if (action.payload === "Category") {
        return {
          ...state,
          products: state.allProducts,
        };
      } else {
        let filtrados = state.allProducts.filter((e) =>
          e.categories.includes(action.payload)
        );
        return {
          ...state,
          products: filtrados,
        };
      }
    case "FILTER_BRAND":
      if (action.payload === "Brand") {
        return {
          ...state,
          products: state.allProducts,
        };
      } else {
        let filtrados = state.allProducts.filter(
          (e) => e.brand === action.payload
        );
        return {
          ...state,
          products: filtrados,
        };
      }

    default:
      return state;
  }
}

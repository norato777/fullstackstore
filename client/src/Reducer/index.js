import { combineReducers } from "redux";

import { SET_APP_IS_LOADING } from "../Actions/appActions";

const INITIAL_STATE = {
  isLoading: false,
};

function appReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_APP_IS_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    default:
      return state;
  }
}
//solo se exporta el root reducer
export const rootReducer = combineReducers({
  app: appReducer,
});

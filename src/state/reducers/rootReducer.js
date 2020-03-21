import initialState from "../store/initialState";
import * as actionTypes from "../actions/actionTypes";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ARTICLE_LIST:
      return {
        ...state,
        ...action.payload
      };
    
    case actionTypes.GET_SINGLE_ARTICLE:
      return {
        ...state,
        ...action.payload
      };
    
    default:
      return state;
  }
};

export default rootReducer;

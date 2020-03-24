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
        singleArticle: action.payload,
        showArticlesList: false
      };

    case actionTypes.BACK_TO_ARTICLE_LIST:
      return {
        ...state,
        showArticlesList: true,
        singleArticle: undefined
      };

    case actionTypes.CATEGORY_SELECTION:
      return {
        ...state,
        categoryName: action.payload.categoryName,
        singleArticle: undefined,
        showArticlesList: true,
        activeItem: action.payload.activeItem
      };

    default:
      return state;
  }
};

export default rootReducer;

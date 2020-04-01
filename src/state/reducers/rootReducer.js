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
        showArticlesList: false,
        showSingleArticle: true,
        flashMessage: undefined
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
        activeItem: action.payload.activeItem,
        flashMessage: undefined
      };

    case actionTypes.LOGIN_USER:
      return {
        ...state,
        showLogin: true,
        showArticlesList: false,
        singleArticle: undefined
      };

    case actionTypes.CLOSE_LOGIN:
      return {
        ...state,
        showLogin: false,
        showArticlesList: true,
        message: ""
      };

    case actionTypes.GREETING:
      return {
        ...state,
        message: action.payload
      };

    case actionTypes.AUTHENTICATE:
      return {
        ...state,
        ...action.payload
      };

    case actionTypes.SHOW_SUBSCRIPTION:
      return {
        ...state,
        ...action.payload,
        showArticlesList: false,
        singleArticle: undefined
      };

    case actionTypes.FLASH_MESSAGE:
      return {
        ...state,
        ...action.payload
      };

    case actionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };

    default:
      return state;
  }
};

export default rootReducer;

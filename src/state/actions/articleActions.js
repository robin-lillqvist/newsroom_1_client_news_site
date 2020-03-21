import axios from "axios";
import { GET_ARTICLE_LIST } from "./actionTypes";
import { GET_SINGLE_ARTICLE } from "./actionTypes";

const fetchArticles = () => {
  return async dispatch => {
    let response = await axios.get("/articles");
    return dispatch(dispatchArticleAction(response.data));
  };
};

const fetchSingleArticle = () => {
  return async dispatch => {
    let response = await axios.get(`/articles/${e.target}`);
    debugger
    return dispatch(dispatchSingleArticleAction())
  }
}

const dispatchArticleAction = json => {
  return { type: GET_ARTICLE_LIST, payload: json };
};

const dispatchSingleArticleAction = json => {
  return { type: GET_SINGLE_ARTICLE, payload: json };
}

export { fetchArticles, fetchSingleArticle };

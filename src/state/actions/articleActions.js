import axios from "axios";
import { GET_ARTICLE_LIST, GET_SINGLE_ARTICLE } from "./actionTypes";

const fetchArticles = () => {
  return async dispatch => {
    let response = await axios.get("/articles");
    return dispatch(dispatchArticleAction(response.data));
  };
};

const fetchSingleArticle = articleID => {
  return async dispatch => {
    let response = await axios.get(`/articles/${articleID}`);
    return dispatch(dispatchSingleArticleAction(response.data));
  };
};

const dispatchArticleAction = json => {
  return { type: GET_ARTICLE_LIST, payload: json };
};

const dispatchSingleArticleAction = json => {
  return { type: GET_SINGLE_ARTICLE, payload: json.article };
};

export { fetchArticles, fetchSingleArticle };

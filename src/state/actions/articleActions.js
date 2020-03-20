import axios from "axios";
import { GET_ARTICLE_LIST } from "./actionTypes";

const fetchArticles = () => {
  return async dispatch => {
    let response = await axios.get(apiURL);
    return dispatch(dispatchArticleAction(response.data));
  };
};

const dispatchArticleAction = json => {
  return { type: GET_ARTICLE_DATA, payload: json };
};

export { fetchArticles };

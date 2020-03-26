import React from "react";
import { connect } from "react-redux";
import DisplayArticles from "./components/DisplayArticles";
import { fetchArticles } from "./state/actions/articleActions";
import { bindActionCreators } from "redux";
import DisplaySingleArticle from "./components/DisplaySingleArticle";

const Display = props => {
  props.fetchArticles()
  return (
    <>
      {props.showArticlesList && <DisplayArticles />}
      {props.singleArticle && <DisplaySingleArticle />}
    </>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: bindActionCreators(fetchArticles, dispatch)
  };
};

const mapStateToProps = state => {
  return {
    showArticlesList: state.showArticlesList,
    singleArticle: state.singleArticle,
    showArticlesByCategory: state.showArticlesByCategory
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
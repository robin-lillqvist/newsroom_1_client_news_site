import React from "react";
import { connect } from "react-redux";
import DisplayAllArticles from "./components/DisplayAllArticles";
import { fetchArticles } from "./state/actions/articleActions";
import { bindActionCreators } from "redux";
import DisplaySingleArticle from "./components/DisplaySingleArticle";

const App = props => {
  props.fetchArticles();
  return (
    <>
      {props.showArticlesList && <DisplayAllArticles />}
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
    singleArticle: state.singleArticle
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";
import { connect } from "react-redux";
import DisplayArticles from "./components/DisplayArticles";
import { fetchArticles } from "./state/actions/articleActions";
import { bindActionCreators } from "redux";
import DisplaySingleArticle from "./components/DisplaySingleArticle";
import {Login, } from './components/UserLogin'

const Display = props => {
  props.fetchArticles()
  return (
    <>
      {props.showArticlesList && <DisplayArticles />}
      {props.singleArticle && <DisplaySingleArticle />}
      {props.showLogin && <Login/>}
      <

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
    showArticlesByCategory: state.showArticlesByCategory,
    showLogin: state.showLogin,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
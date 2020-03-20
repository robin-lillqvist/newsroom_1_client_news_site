import React from "react";
import { connect } from "react-redux";
import DisplayAllArticles from "./components/DisplayAllArticles";
import { fetchArticles } from "./state/actions/articleActions";
import { bindActionCreators } from "redux";
import { Grid, Image } from 'semantic-ui-react';

const App = props => {
  props.fetchArticles();

  return <DisplayAllArticles />;
};
const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: bindActionCreators(fetchArticles, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(App);
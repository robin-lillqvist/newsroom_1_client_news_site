import React from "react";
import { connect } from "react-redux";
import DisplayAllArticles from "./components/DisplayAllArticles";
import { fetchArticles } from "./state/actions/articleActions";
import { bindActionCreators } from "redux";

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

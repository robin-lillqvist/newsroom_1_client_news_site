import React, { Component } from "react";
import { connect } from "react-redux";
import DisplayAllArticles from "./components/DisplayAllArticles";

const App = props => {

  return <DisplayAllArticles />;
};
export default connect()(App);

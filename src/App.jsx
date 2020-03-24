import React from "react";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { Switch, Route } from "react-router-dom";
import DisplayHeader from "./components/DisplayHeader";
import HeaderCategories from "./components/DisplayHeaderCategory";
import Display from './Display'


const App = props => {
  return (
    <>
      <DisplayHeader />
      <HeaderCategories />
      <Switch>
        <Route exact path="/" component={Display}></Route>
        <Route
          exact
          path={props.categoryName}
          component={Display}
        ></Route>
      </Switch>
    </>
  );
};

export default App

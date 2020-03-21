import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import { Provider } from "react-redux";
import configureStore from "./state/store/configureStore";
import 'semantic-ui-css/semantic.min.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import DisplayHeader from './components/DisplayHeader';
import HeaderCategories from './components/DisplayHeaderCategory';
import DisplayAllArticles from "./components/DisplayAllArticles";

axios.defaults.baseURL = "http://localhost:3000/api/";
const store = configureStore()
window.store = store;

const Menu = () => {
  return (
    <>
      <DisplayHeader />
      <HeaderCategories/>
      <Switch>
        <Route exact path="/" component={App}></Route>
      </Switch>
      {/* <Footer /> */}
    </>
  );
};


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Menu />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

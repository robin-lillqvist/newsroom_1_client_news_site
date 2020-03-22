import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import { Provider, connect } from "react-redux";
import configureStore from "./state/store/configureStore";
import "semantic-ui-css/semantic.min.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import DisplayHeader from "./components/DisplayHeader";
import HeaderCategories from "./components/DisplayHeaderCategory";
import DisplayAllArticles from "./components/DisplayAllArticles";
import DisplayArticlesByCategory from "./components/DisplayArticlesByCategory";
import DisplaySingleArticle from "./components/DisplaySingleArticle";

axios.defaults.baseURL = "http://localhost:3000/api/";
const store = configureStore();
window.store = store;

const Menu = props => {
  return (
    <>
      <DisplayHeader />
      <HeaderCategories />
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route
          exact
          path={props.categoryName}
          component={DisplayArticlesByCategory}
        ></Route>
        {/* <Route exact path="/article" component={props.singleArticle.length>0 && <DisplaySingleArticle />}></Route> */}
      </Switch>
      {/* <Footer /> */}
    </>
  );
};

// const mapStateToProps = state => {
//   return {
//     categoryName: state.categoryName,
//     singleArticle: state.singleArticle,
//     showArticlesByCategory: state.showArticlesByCategory,
//     showArticlesList: state.showArticlesList,
//   };
// };

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
// export default connect(mapStateToProps);

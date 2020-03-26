import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./state/store/configureStore";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import axios from 'axios'

axios.defaults.baseURL = "https://newsroom-team-1.herokuapp.com/api";
// axios.defaults.baseURL = "http://localhost:3000/api";
const store = configureStore();
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

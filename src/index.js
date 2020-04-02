import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./state/store/configureStore";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import { StripeProvider } from 'react-stripe-elements';

axios.defaults.baseURL = "https://newsroom-team-1.herokuapp.com/api";

const store = configureStore();
window.store = store;
const key = `${process.env.REACT_APP_STRIPE_API_KEY }`

ReactDOM.render(
  <Provider store={store}>
    <StripeProvider apiKey={key}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StripeProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

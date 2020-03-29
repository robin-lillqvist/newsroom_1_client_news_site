import React from "react";
import { connect } from "react-redux";
import DisplayArticles from "./components/DisplayArticles";
import { fetchArticles } from "./state/actions/articleActions";
import { bindActionCreators } from "redux";
import DisplaySingleArticle from "./components/DisplaySingleArticle";
import Login from './components/UserLogin';
import SubscriptionForm from './components/SubscriptionForm';
import { Elements } from 'react-stripe-elements';

const Display = props => {
  props.fetchArticles()
  return (
    <>
      {props.flashMessage.length > 0 && <h2>{props.flashMessage}</h2>}
      {props.showArticlesList && <DisplayArticles />}
      {props.singleArticle && <DisplaySingleArticle />}
      {props.showLogin && <Login/>}
      {props.showSubscription && <Elements><SubscriptionForm/></Elements>}
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
    showSubscription: state.showSubscription,
    flashMessage: state.flashMessage
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
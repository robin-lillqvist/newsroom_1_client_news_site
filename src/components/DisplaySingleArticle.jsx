import React from "react";
import { connect } from "react-redux";
import { Grid, Header, Image } from "semantic-ui-react";
import { bindActionCreators } from 'redux';
import moduleName from 'module'

const DisplaySingleArticle = props => {
  let articleDetails;
  let article = props.singleArticle
  articleDetails = (
    <>
      <Grid key={article.id} align="center">
        <Grid.Column>
          <Header>{article.title}</Header>
          <p>{article.lead}{article.content}</p>
          <button id="back-button" onClick={() => props.dispatch({type:"BACK_TO_ARTICLE_LIST"})} key={article.id}>
              Back
            </button>
        </Grid.Column>
      </Grid>
    </>
  );

  return <div id="single-article">{articleDetails}</div>;
};

const mapStateToProps = state => {
  return {
    singleArticle: state.singleArticle
  };
};

export default connect(mapStateToProps)(DisplaySingleArticle);

// create button for back, and update the showArticlesList back to true, button onclick function then dispatch action and 
//in root reducer when action is hit update showarticleslist to true, don't have to send payload
// then add to existing test for back button
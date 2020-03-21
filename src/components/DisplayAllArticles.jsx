import React from "react";
import { connect } from "react-redux";
import { Grid, Header, Image } from "semantic-ui-react";
import ThomasCar from "../images/IMG_0745.JPG";
import { fetchSingleArticle } from "./state/actions/articleActions";
import { bindActionCreators } from "redux";

const DisplayAllArticles = props => {
  const singleArticle = () => {
    props.fetchSingleArticle()
  }
  let articleDisplay = props.articles.map(article => {
    return (
      <>
        <Grid key={article.id} align="center">
          <Grid.Column>
            <Image src={ThomasCar} size="medium" />
            <Header>{article.title}</Header>
            <p>{article.lead}</p> 
            <button id="open-article" onClick={() => singleArticle()} key={article.id}>
              Read more
            </button>
          </Grid.Column>
        </Grid>
      </>
    );
  });

  return <div id="article-list">{articleDisplay}</div>;
};

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps)(DisplayAllArticles);

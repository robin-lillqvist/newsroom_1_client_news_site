import React from "react";
import { connect } from "react-redux";
import { Grid, Header, Image } from "semantic-ui-react";
import ThomasCar from "../images/IMG_0745.JPG";

const DisplayAllArticles = props => {
  let articleDisplay = props.articles.map(article => {
    return (
      <>
        <Grid key={article.id} align="center">
          <Grid.Column>
            <Image src={ThomasCar} size="medium" />
            <Header>{article.title}</Header>
            <p>{article.lead}</p>
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

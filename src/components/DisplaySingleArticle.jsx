import React from "react";
import { connect } from "react-redux";

const DisplaySingleArticle = props => {
  let articleDetails;
  articleDetails = (
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

  return <div id="single-article">{articleDetails}</div>;
};

const mapStateToProps = state => {
  debugger
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps)(DisplaySingleArticle);
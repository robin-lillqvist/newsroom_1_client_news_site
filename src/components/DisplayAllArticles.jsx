import React from "react";
import { connect } from "react-redux";
import { Grid, Image, Header } from "semantic-ui-react";

const DisplayAllArticles = props => {
  let articleDisplay = props.articles.map(article => {
    return (
      <Grid key={article.id}>
        <Grid.Column width={4}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width={9}>
          <Header>{article.title}</Header>
          <p>{article.lead}</p>
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
        </Grid.Column>
      </Grid>
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
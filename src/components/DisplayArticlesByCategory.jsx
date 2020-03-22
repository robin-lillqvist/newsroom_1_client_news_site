import React from "react";
import { connect } from "react-redux";
import { Grid, Header, Image, Button } from "semantic-ui-react";
import ThomasCar from "../images/IMG_0745.JPG";
import { fetchSingleArticle } from "../state/actions/articleActions";
import { bindActionCreators } from "redux";

const DisplayArticlesByCategory = props => {
  const singleArticle = articleID => {
    props.fetchSingleArticle(articleID);
  };

  let articleDisplayByCategory = props.articles.map(article => {
    debugger
    if (article.category.name === props.categoryName) {
      return (
        <Grid key={article.id} align="center">
          <Grid.Column>
            <Image src={ThomasCar} size="medium" />
            <Header>{article.title}</Header>
            <p>{article.lead}</p>
            <Button
              id={`open-article-${article.id}`}
              onClick={() => singleArticle(article.id)}
              key={article.id}
            >
              Read more
            </Button>
          </Grid.Column>
        </Grid>
      );
    } else {
      return (
        <p>There are currently no articles in this category. Please try again later.</p>
      )
    }
  });


  return <div id="article-by-category-list">{articleDisplayByCategory}</div>;
};

const mapStateToProps = state => {
  return {
    articles: state.articles,
    categoryName: state.categoryName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleArticle: bindActionCreators(fetchSingleArticle, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayArticlesByCategory);

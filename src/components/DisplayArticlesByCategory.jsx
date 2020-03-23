import React from "react";
import { connect } from "react-redux";
import { Grid, Header, Image, Button } from "semantic-ui-react";
import ThomasCar from "../images/IMG_0745.JPG";
import { fetchSingleArticle } from "../state/actions/articleActions";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

const DisplayArticlesByCategory = props => {
  const singleArticle = articleID => {
    props.fetchSingleArticle(articleID);
  };

  let articleDisplayByCategory = props.articles.map(article => {
    if (article.category === props.categoryName) {
      return (
        <Grid key={article.id} align="center">
          <Grid.Column>
            <Image src={ThomasCar} size="medium" />
            <Header>{article.title}</Header>
            <p>{article.lead}</p>
            {/* <Link to='/article'> */}
            <Button
              id={`open-article-category-${article.id}`}
              onClick={() => singleArticle(article.id)}
              // to= "/article"
              // as={Link}
              // renderAs='button'
              key={article.id}
            >
                Read more
            </Button>
            {/* </Link> */}
          </Grid.Column>
        </Grid>
      );
    }
  });
  return <div id="article-by-category-list">{articleDisplayByCategory}</div>;
};

const mapStateToProps = state => {
  return {
    articles: state.articles,
    categoryName: state.categoryName,
    showArticlesByCategory: state.showArticlesByCategory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleArticle: bindActionCreators(fetchSingleArticle, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayArticlesByCategory);

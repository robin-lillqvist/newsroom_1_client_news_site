import React from "react";
import { connect } from "react-redux";
import { Grid, Header, Image, Button } from "semantic-ui-react";
import ThomasCar from "../images/IMG_0745.JPG";
import { fetchSingleArticle } from "../state/actions/articleActions";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

const DisplayAllArticles = props => {
  const singleArticle = articleID => {
    props.fetchSingleArticle(articleID);
  };
  let articleDisplay = props.articles.map(article => {
    return (
      <>
        <Grid key={article.id} align="center">
          <Grid.Column>
            <Image src={ThomasCar} size="medium" />
            <Header>{article.title}</Header>
            <p>{article.lead}</p>
            {/* <Link to="/article"> */}
            <Button
              id={`open-article-${article.id}`}
              onClick={() => singleArticle(article.id)}
              // to={{ pathname: "/article", state: { id: article.id } }}
              // as={Link}
              key={article.id}
            >
              Read more
            </Button>
            {/* </Link> */}
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

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleArticle: bindActionCreators(fetchSingleArticle, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayAllArticles);

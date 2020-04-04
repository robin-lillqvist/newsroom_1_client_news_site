import React from "react";
import { connect } from "react-redux";
import { Grid, Header, Image, Button } from "semantic-ui-react";
import { fetchSingleArticle } from "../state/actions/articleActions";
import { bindActionCreators } from "redux";
import { useTranslation } from "react-i18next";

const DisplayArticles = props => {
  const { t } = useTranslation();
  const singleArticle = articleID => {
    props.fetchSingleArticle(articleID);
  };
  let articles;
  if (props.categoryName) {
    articles = props.articles.filter(article => {
      return article.category === props.categoryName && article;
    });
  } else {
    articles = props.articles;
  }
  let articleDisplay = articles.map(article => {
    return (
      <Grid key={article.id} id={`article-${article.id}`} align="center">
        <Grid.Column>
          <Image src={article.image} size="medium" />
          <Header>{article.title}</Header>
          <p>{article.lead}</p>
          <Button
            id={`open-article-${article.id}`}
            onClick={() => singleArticle(article.id)}
            key={article.id}
          >
            {t("article.read-more")}
          </Button>
        </Grid.Column>
      </Grid>
    );
  });

  return <div id="article-list">{articleDisplay}</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(DisplayArticles);

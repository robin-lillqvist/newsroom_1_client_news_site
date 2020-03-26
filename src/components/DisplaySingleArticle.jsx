import React from "react";
import { connect } from "react-redux";
import { Button, Header, Icon, Image, Container } from "semantic-ui-react";

const DisplaySingleArticle = props => {
  let articleDetails;
  let article = props.singleArticle;
  articleDetails = (
    <>
      <Image size="medium" src={article.image} />
      <br />
      <Container key={article.id} align="center">
        <Header as="h1">{article.title}</Header>
        <Header as="h4">{article.lead}</Header>
        <p>{article.content}</p>
        <Button
          id="back-button"
          onClick={() => props.dispatch({ type: "BACK_TO_ARTICLE_LIST" })}
          key={article.id}
        >
          <Icon name="chevron left" /> Back
        </Button>
      </Container>
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

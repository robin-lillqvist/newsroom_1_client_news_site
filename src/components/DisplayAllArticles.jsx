import React from "react";
import { connect } from "react-redux";

const DisplayAllArticles = props => {
  let articleDisplay = props.articles.map(article => {
    return (
      <div key={article.id}>
        <h4>{article.title}</h4>
        <p>{article.lead}</p>
      </div>
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

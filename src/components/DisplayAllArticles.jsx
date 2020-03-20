import React from 'react'
import { connect } from 'react-redux'


const DisplayAllArticles = props => {
  let articleDisplay = props.articles.map(article => {
    return (
      <div>
        <h4 key={article.id}>{article.title}</h4>
        <p>{article.lead}</p>
      </div>
    );
  });

  return <>{articleDisplay}</>;
};

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps)(DisplayAllArticles)

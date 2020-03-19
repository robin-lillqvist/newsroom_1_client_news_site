import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    axios.get("/articles").then(response => {
      this.setState({ articles: response.data.articles });
      debugger
    });
  }
  render() {
    let displayArticles;
    displayArticles = this.state.articles.map(article => {
      return (
        <div key={article.id} id="article-list">
          {article.title}
          {article.lead}
        </div>
      );
    });
    return(
      <>
      <h1>
        Berlingo New
      </h1>
      {displayArticles}
      </>
    )
  }
}

export default App;

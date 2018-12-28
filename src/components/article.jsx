import React, { Component } from "react";

class Article extends Component {
  article = articleId => {
    let isArticle = p => p.id === articleId;
    return this.props.data.find(isArticle);
  };

  render() {
    const articleId = this.props.match.params.id;
    const article = this.article(articleId);

    if (article) {
      return (
        <div>
          <div class="title">
            <h1>{article.title})</h1>
          </div>
          <div class="article">{article.post}</div>
        </div>
      );
    }

    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
}

export default Article;

import React, { Component } from "react";

class Article extends Component {
  article = articleId => {
    let isArticle = p => p.id === articleId;
    return this.props.data.find(isArticle);
  };

  render() {
    console.log(this.props.match.params.id);
    console.log(this.props.data);

    const articleId = "6";
    console.log(articleId);

    const article = this.article(articleId);
    console.log(this.article(articleId));

    if (article) {
      return (
        <div>
          <h1>{article.title})</h1>
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

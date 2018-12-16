import React, { Component } from "react";
import { Link } from "react-router-dom";

class Posts extends Component {
  state = {};

  render() {
    return (
      <Link to={`/post/${this.props.data.id}`}>
        <div class="posts">
          <h2>{this.props.data.title}</h2>

          <p>{this.props.data.post}</p>
        </div>
      </Link>
    );
  }
}

export default Posts;

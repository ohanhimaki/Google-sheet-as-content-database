import React, { Component } from "react";

import Post from "./post";

class Posts extends Component {
  state = {};
  render() {
    const posts = this.props.data;
    return (
      <div class="post">
        {posts
          .slice(0)
          .reverse()
          .map((post, i) => (
            <Post data={post} />
          ))}
      </div>
    );
  }
}

export default Posts;

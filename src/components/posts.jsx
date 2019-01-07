import React, { Component } from "react";

import Post from "./post";

class Posts extends Component {
  state = {};
  render() {
    const posts = this.props.data;
    return (
      <div className="row">
        <div class="col-md-12">
          {posts
            .slice(0)
            .reverse()
            .map((post, i) => (
              <Post data={post} />
            ))}
        </div>
      </div>
    );
  }
}

export default Posts;

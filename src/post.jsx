import React, { Component } from "react";

class Posts extends Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <div class="posts">
        <a href={this.props.data.id}>
          <h2>{this.props.data.title}</h2>

          <p>{this.props.data.post}</p>
        </a>
      </div>
    );
  }
}

export default Posts;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Posts extends Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <div class="posts">
        <h2>{this.props.data.title}</h2>

        <p>{this.props.data.post}</p>
      </div>
    );
  }
}

export default Posts;

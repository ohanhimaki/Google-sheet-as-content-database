import React, { Component } from "react";
import { Link } from "react-router-dom";

class Posts extends Component {
  state = {};

  render() {
    return (
      <Link to={`/post/${this.props.data.id}`}>
        <div className="card flex-md-row mb-4 shadow-sm h-md-250">
          <h2 className="text-dark">{this.props.data.title}</h2>

          <p className="text-dark">{this.props.data.post}</p>
        </div>
      </Link>
    );
  }
}

export default Posts;

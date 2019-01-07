import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="navbar navbar-expand-md navbar-dark bg-dark margin-bottom">
        <a className="navbar-brand" href="/">
          Title goes here
        </a>
      </div>
    );
  }
}

export default Header;

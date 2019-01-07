import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import config from "./config";
import load from "./helpers/spreadsheet";

import Footer from "./components/footer";
import Header from "./components/header";
import Posts from "./components/posts";
import Article from "./components/article";

class App extends Component {
  state = {
    posts: [],
    error: null
  };

  componentDidMount() {
    window.gapi.load("client", this.initClient);
  }

  initClient = () => {
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        load(this.onLoad);
      });
  };

  onLoad = (data, error) => {
    if (data) {
      const posts = data.posts;
      this.setState({ posts });
    } else {
      this.setState({ error });
    }
  };

  render() {
    const { posts, error } = this.state;
    if (error) {
      console.log(this.state.error);
      return <div>{this.state.error.code}</div>;
    }

    return (
      <div className="App">
        <Header />
        <div className="container">
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path="/"
                render={props => <Posts {...props} data={posts} />}
              />

              <Route
                path="/post/:id"
                render={props => <Article {...props} data={posts} />}
              />
            </Switch>
          </BrowserRouter>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;

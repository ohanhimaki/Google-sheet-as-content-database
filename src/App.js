import React, { Component } from 'react';

import './App.css';
import config from './config';
import load from './helpers/spreadsheet';




class App extends Component {
  state ={
    posts: [],
    error: null
  }

  componentDidMount(){
    window.gapi.load("client", this.initClient);
  }



  initClient = () => {
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        discoveryDocs: config.discoveryDocs
      })
      .then(()=>{
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
    const {posts, error } = this.state;
    if (error) {
      return <div>{this.state.error}</div>;
    }


    return (
      <div className="App">
        <header className="App-header">
          <ul>      
            {posts.map((post, i) =>(
              <li key={i}>
                {post.a} {post.b}
              </li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;

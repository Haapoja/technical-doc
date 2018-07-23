import React, { Component } from 'react';

import './App.css';
import NavBar from './navbar';
import Docs from "./documentation";

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar />
       <div className="doc">
       <Docs  />
       </div>
      </div>
    );
  }
}

export default App;

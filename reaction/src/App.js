import React, { Component } from 'react';
import Search from './Search';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';
import axios from 'axios';
import apiKey from './config';

class App extends Component {
  state = {
    images: []
  }
render() {
  return (
    <div className="App">
      <Search />
      <Navigation />
      <PhotoContainer />
    </div>
  );
}

}

export default App;

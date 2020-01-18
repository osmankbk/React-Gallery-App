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
  /*componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=lightning thunder&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }*/
searchImages = (query) => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        images: response.data.photos.photo
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
}

render() {
  console.log(this.state.images);
  return (
    <div className="App">
      <Search searchBar={this.searchImages} />
      <Navigation searchPut />
      <PhotoContainer data={this.state.images} />
    </div>
  );
}

}

export default App;

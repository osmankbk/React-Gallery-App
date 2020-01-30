import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Search from './Search';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';
import axios from 'axios';
import apiKey from './config';

class App extends Component {
  state = {
    images: [],
    imagesTwo: [],
    imagesThree: [],
    imagesFour: [],
    result: ''
  }
  componentDidMount() {
    this.searchImages('dogs');
    this.searchImagesTwo('atumn');
    this.searchImagesThree('flowers');
    this.searchImagesFour('leaves');

    }

searchImages = (query) => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        images: response.data.photos.photo,
        result: query
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
}

searchImagesTwo = (query) => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        imagesTwo: response.data.photos.photo,
        result: query
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
}

searchImagesThree = (query) => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        imagesThree: response.data.photos.photo,
        result: query
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
}

searchImagesFour = (query) => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        imagesFour: response.data.photos.photo,
        result: query
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
}
render() {
  console.log(this.state.result);
  return (
    <BrowserRouter>
      <div className="App">
        <Search searchBar={this.searchImages} />
        <Navigation searchPut={this.searchImages} />
          <Switch>
            <Route exact path="/" render={ () => <PhotoContainer
              data={this.state.images}
              title={this.state.result}
              /> } />
              <Route path="/search" render={ () => <PhotoContainer
                data={this.state.images}
                title={this.state.result}
                /> } />
               <Route path="/atumn" render={ () => <PhotoContainer
                data={this.state.imagesTwo}
                title={this.state.result}
                /> } />
               <Route path="/flowers" render={ () => <PhotoContainer
                data={this.state.imagesThree}
                title={this.state.result}
                /> } />
               <Route path="/leaves" render={ () => <PhotoContainer
                data={this.state.imagesFour}
                title={this.state.result}
                /> } />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

}

export default App;

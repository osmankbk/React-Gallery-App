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
import FourOFour from './FourOFour';

class App extends Component {
  state = {
    images: [],
    imagesTwo: [],
    imagesThree: [],
    imagesFour: [],
    loading: true,
    result: ''
  }
  componentDidMount() {
    this.searchImagesFour('leaves');
    this.searchImagesThree('flowers');
    this.searchImagesTwo('atumn');
    this.searchImages('dogs');


    }

searchImages = (query) => {
  this.setState({
    loading: true
  })
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        loading: false,
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
        loading: false,
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
        loading: false,
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
        loading: false,
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
      <div className="container">
        <Search
        searchBar={this.searchImages}
           />
        <Navigation
          loading={this.state.loading}
          searchPut={this.searchImages}
          />
          <Switch>
            <Route exact path="/" render={ () => <PhotoContainer
              loading={this.state.loading}
              data={this.state.images}
              title={this.state.result}
              /> } />
              <Route path="/search" render={ () => <PhotoContainer
                loading={this.state.loading}
                data={this.state.images}
                title={this.state.result}
                /> } />
               <Route path="/atumn" render={ () => <PhotoContainer
                 loading={this.state.loading}
                data={this.state.imagesTwo}
                title={this.state.result}
                /> } />
               <Route path="/flowers" render={ () => <PhotoContainer
                 loading={this.state.loading}
                data={this.state.imagesThree}
                title={this.state.result}
                /> } />
               <Route path="/leaves" render={ () => <PhotoContainer
                 loading={this.state.loading}
                data={this.state.imagesFour}
                title={this.state.result}
                /> } />
                <Route component={FourOFour}/>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

}

export default App;

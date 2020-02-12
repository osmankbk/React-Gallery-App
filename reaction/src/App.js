/* Treehouse FSJS Techdegree
 * Project 7 - React Gallery App
 * App.js
  Goal: Exceed Expectation
  */


//Imported the necessary files and component to put my app together
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
    cats: [],
    flowers: [],
    atumn: [],
    loading: true,
    result: ''
  }
  //I request and load the home and default topics when the page first loads, i don't have to reload new data each time
  componentDidMount() {
    this.searchImagesFour('leaves');
    this.searchImagesThree('flowers');
    this.searchImagesTwo('cats');
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
//My function API request functions
searchImagesTwo = (query) => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        loading: false,
        cats: response.data.photos.photo,
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
        flowers: response.data.photos.photo,
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
        atumn: response.data.photos.photo,
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
}

changeResult = (text) => {
  this.setState({
    result: text
  });
}
render() {
  return (
    <BrowserRouter>
      <div className="container">
        <Search
        searchBar={this.searchImages}
           />
        <Navigation
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
               <Route path="/cats" render={ () => <PhotoContainer
                data={this.state.cats}
                title={'Cats'}
                /> } />
               <Route path="/flowers" render={ () => <PhotoContainer
                data={this.state.flowers}
                title={'Flowers'}
                /> } />
               <Route path="/atumn" render={ () => <PhotoContainer
                data={this.state.atumn}
                title={'Atumn'}
                /> } />
                <Route component={FourOFour}/>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

}

export default App;

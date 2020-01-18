import React, { Component } from 'react';

class PhotoContainer extends Component {

  render() {
    return(
      <div class="photo-container">
        <h2>Results</h2>
        <ul>
          <li>
            <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
          </li>
        </ul>
      </div>
    );
  }
}

export default PhotoContainer;

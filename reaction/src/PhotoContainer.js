import React, { Component } from 'react';
import NotFound from './NotFound';
import Image from './Image';

class PhotoContainer extends Component {
  state = {
      loading: true
  }

  render() {
    const loading = this.props.loading;
    let photos;
    let title = this.props.title;
    const pictures = this.props.data;
    if (pictures.length < 1) {
      photos = <NotFound />
    } else {
       photos = pictures.map(photo =>
          <Image
            key={photo.id.toString()}
            server={photo.server}
            secret={photo.secret}
            farmId={photo.farm}
            id={photo.id}
            />
      );
    }
    return(
      <div className="photo-container">
        <h2>Images Of {title} </h2>
        <ul>
          {loading ? <h2>...Loading</h2> : photos }
        </ul>
      </div>
    );
  }
}

export default PhotoContainer;

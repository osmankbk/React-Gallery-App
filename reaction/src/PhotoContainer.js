import React from 'react';
import Image from './Image';

const PhotoContainer = (props) => {
    const pictures = props.data;
    let photos = pictures.map(photo =>
      <Image
        key={photo.id.toString()}
        server={photo.server}
        secret={photo.secret}
        farmId={photo.farm}
        id={photo.id}
        />
    );
    return(
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {photos}
        </ul>
      </div>
    );
}

export default PhotoContainer;

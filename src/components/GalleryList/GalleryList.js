import React, { Component } from "react";

class GalleryList extends Component {
  render() {
    const imageArray = this.props.myImageList.map((item, index) => {
      return (
        <div className="gallery" key={index}>
          <img src={item.path} alt={item.description} />
        </div>
      );
    });

    return <div>{imageArray}</div>;
  }
}

export default GalleryList;

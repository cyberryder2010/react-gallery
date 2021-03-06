import React, { Component } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

class GalleryList extends Component {
  render() {
    const imageArray = this.props.myImageList.map((item, index) => {
      return (
        <GalleryItem key={index} item={item} addLikes={this.props.addLikes} />
      );
    });
    return <div>{imageArray}</div>;
  }
}

export default GalleryList;

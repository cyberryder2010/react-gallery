import React, { Component } from "react";

class GalleryItem extends Component {
  render() {
    return (
      <div className="gallery">
        <img src={this.props.item.path} alt={this.props.item.description} />
      </div>
    );
  }
}

export default GalleryItem;

import React, { Component } from "react";

class GalleryItem extends Component {
  render() {
    return (
      <div className="galleryItems">
        <div className="images">
          <img src={this.props.item.path} alt={this.props.item.description} />
        </div>
        <div className="button">
          <button
            className="likes"
            onClick={this.props.addLikes(this.props.item.id)}
          >
            LIKE ME
          </button>
        </div>
      </div>
    );
  }
}

export default GalleryItem;

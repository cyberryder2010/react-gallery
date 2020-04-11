import React, { Component } from "react";

class GalleryItem extends Component {
  render() {
    return (
      <div className="gallery">
        <img src={this.props.item.path} alt={this.props.item.description} />
        <button
          className="likes"
          onClick={this.props.addLikes(this.props.item.id)}
        >
          LIKE ME
        </button>
      </div>
    );
  }
}

export default GalleryItem;

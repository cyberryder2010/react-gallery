import React, { Component } from "react";

class GalleryItem extends Component {
  state = {
    isToggleOn: true,
  };

  handleClick = () => {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  };

  render() {
    return (
      <div className="galleryItems">
        <div className="images" onClick={this.handleClick}>
          {this.state.isToggleOn ? (
            <img src={this.props.item.path} alt={this.props.item.description} />
          ) : (
            <p>{this.props.item.description}</p>
          )}
        </div>
        <div className="button">
          <button
            className="likes"
            onClick={this.props.addLikes(this.props.item.id)}
          >
            LIKE ME
          </button>
          <div className="countClicks">
            This image has {this.props.item.likes} likes!!
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryItem;

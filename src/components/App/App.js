import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";

class App extends Component {
  state = {
    myImage: {
      id: 0,
      path: "",
      description: "",
      likes: 0,
    },
    myImageList: [],
  };
  componentDidMount() {
    console.log("Component App Did Mount");
    this.getMyImages();
  }

  getMyImages() {
    axios
      .get("/gallery")
      .then((response) => {
        this.setState(
          {
            myImageList: [...response.data],
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch((err) => {
        alert("Oops");
      });
  }

  addLikes = (id) => (event) => {
    console.log(id);
    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
        this.getMyImages();
      })
      .catch((err) => {
        alert("Oops");
      });
  };

  //need to toggle between image and description on click
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <div>
          <GalleryList
            myImageList={this.state.myImageList}
            addLikes={this.addLikes}
          />
        </div>
      </div>
    );
  }
}
export default App;

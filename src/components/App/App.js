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
        this.setState({
          myImageList: [...response.data],
        });
      })
      .catch((err) => {
        alert("Oops");
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <h2>My Gallery</h2>
        <GalleryList myImageList={this.state.myImageList} />
      </div>
    );
  }
}
export default App;

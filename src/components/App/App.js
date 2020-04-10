import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    newAnimal: {
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
    axios({
      method: "GET",
      url: "/gallery",
    })
      .then((response) => {
        // update state with server data
        console.log("Server Response:", response.data);
        // store songs in local state
        this.setState(
          {
            myImageList: [...response.data],
          },
          () => {
            console.log("Animals", this.state.myImageList);
          }
        );
      })
      .catch((err) => {
        // surface error message to user
        alert("Oops. Please try again later.");
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg" />
      </div>
    );
  }
}
export default App;

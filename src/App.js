import React, { Component } from "react";
import "./App.css";

import ValidationComponent from "./Components/ValidationComponent";
import CharComponent from "./Components/CharComponent";

class App extends Component {
  state = {
    userInput: ""
  };

  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = (index) => {
    // Array of chars
    const oldText = this.state.userInput.split('');
    oldText.splice(index,1);
    // Convert chars to text again.
    const updatedText = oldText.join('');
    this.setState({userInput: updatedText});
  };

  render() {
    const charlist = this.state.userInput.split("").map((ch, index) => {
      return (
        <CharComponent
          character={ch}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <ValidationComponent length={this.state.userInput.length} />
        {charlist}
      </div>
    );
  }
}

export default App;

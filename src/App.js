import React, { Component } from "react";
import "./App.css";
import Button from "material-ui/Button";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import Person from "./Person/Person";

class App extends Component {
  state = {
    username: "Robert"
  };

  setNameHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  randomNameHandler = () => {
    const names = ["Herbert", "Norbert", "John"];
    this.setState({
      username: names[Math.floor(Math.random() * 3)]
    });
  };

  render() {
    const style = {
      backgroundColor: "#A4EFE0"
    };

    return (
      <div className="App">
        <Person name="fucktard" />
        <div>
          <UserInput changed={this.setNameHandler} name={this.state.username} />
          <Button style={style} onClick={this.randomNameHandler}>
            Randomize!
          </Button>c
        </div>
        <div>
          <UserOutput name={this.state.username} />
          <UserOutput name="Roger" />
          <UserOutput name="Natasha" />
        </div>
      </div>
    );
  }
}

export default App;

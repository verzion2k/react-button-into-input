import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();

    this.state = {
      displayInput: false
    };
  }

  displayInput = () => {
    this.setState(
      {
        displayInput: !this.state.displayInput
      },
      () => {
        this.textInput.current.focus();
      }
    );
  };

  render() {
    if (this.state.displayInput) {
      return (
        <div>
          <Input ref={this.textInput} />
        </div>
      );
    }
    return (
      <div id="root">
        <Button onClick={this.displayInput} name={"Click me!"} />
      </div>
    );
  }
}

export default Todo;

import React, { Component } from "react";
import Button from "./Button";

class InputItem extends Component {
  render() {
    const inputEntries = this.props.entries;
    const listInputItems = inputEntries.map((inputEntry, index) => {
      const deleteAction = () => {
        this.props.removeItem(index);
      };
      return (
        <li key={index}>
          {inputEntry}
          <Button name="x" onClick={deleteAction} />
        </li>
      );
    });
    return <ul>{listInputItems}</ul>;
  }
}

export default InputItem;

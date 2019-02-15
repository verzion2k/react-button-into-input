import React, { Component } from "react";
import InputItem from "./InputItem";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputItems: [],
      value: ""
    };
  }

  changeValue = e => {
    this.setState({ value: e.target.value });
  };

  addItem = e => {
    e.preventDefault();

    if (this.state.value !== "") {
      this.setState(
        prevState => ({
          inputItems: [...prevState.inputItems, prevState.value],
          value: ""
        }),
        () => {
          console.log(this.state);
        }
      );
    }
  };

  removeItem = index => {
    const inputItems = this.state.inputItems;

    inputItems.splice(index, 1);

    this.setState({
      inputItems
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            ref={this.props.forwardedRef}
            value={this.state.value}
            onChange={this.changeValue}
          />
        </form>
        <InputItem
          entries={this.state.inputItems}
          removeItem={this.removeItem}
        />
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />;
});

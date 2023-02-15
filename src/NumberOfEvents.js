import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    eventQty: 32,
  };

  handleQtyChange = (event) => {
    let value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        eventQty: value,
        infoText: "Select number from 1 to 32.",
      });
    } else {
      this.props.updateEvents(null, value);
      this.setState({
        eventQty: value,
        infoText: "",
      });
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <label>
          Number of Events:
          <input
            type="number"
            className="Quantity"
            value={this.state.eventQty}
            onChange={this.handleQtyChange}
          ></input>
        </label>
        <ErrorAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default NumberOfEvents;

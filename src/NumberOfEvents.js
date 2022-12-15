import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    eventQty: 32,
  }

  handleQtyChange = (event) => {
    const value = event.target.value;
    this.setState({
      eventQty: value,
    });
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
          >
          </input>
        </label>
      </div>
    );
  }
}

export default NumberOfEvents;
import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "CornflowerBlue";
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "FireBrick";
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "Gold";
  }

  getStyle = () => {
    return {
      color: this.color,
      margin: "2em 0",
      textAlign: "center",
    };
  };
}

export { InfoAlert, ErrorAlert, WarningAlert };

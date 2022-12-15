import React, { Component } from "react";

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleShowDetails = () => {
    if (!this.state.showDetails) {
      this.setState({
        showDetails: true,
      });
    } else {
      this.setState({
        showDetails: false,
      });
    }
  };

  render() {
    const { event } = this.props;
    return (
      <div className="Event">
        <h3 className="Summary">{event.summary}</h3>
        <p className="Start">
          {event.start.dateTime} ({event.start.timeZone})
        </p>
        <p className="Location">
          @{event.summary} | {event.location}
        </p>
        {this.state.showDetails ? (
          <div className="Details">
            <h3>About event:</h3>
            <a
              className="Calendar-link"
              href={event.htmlLink}
            >
              See details on Google Calendar
            </a>
            <p className="Description">{event.description}</p>
            <button
              className="Hide-details"
              onClick={this.handleShowDetails}
            >
              Hide Details
            </button>
          </div>
        ) : (
          <button
            className="Show-details"
            onClick={this.handleShowDetails}
          >
            Show Details
          </button>
        )}
      </div>
    )
  }
}

export default Event;
import React, { Component } from "react";
import Event from "./Event";
import { WarningAlert } from "./Alert";

class EventList extends Component {
  render() {
    const { events } = this.props;
    const online = navigator.onLine;
    return (
      <div>
        <WarningAlert text="Warning: You are currently offline. Only previously viewed events may be displayed." />
        <ul className="EventList">
          {events.map((event) => (
            <li key={event.id}>
              <Event event={event} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EventList;

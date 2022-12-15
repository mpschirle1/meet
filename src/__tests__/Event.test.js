import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  })
  
  test("Component is rendered", () => {
    expect(EventWrapper).toBeDefined();
  });

  test("Event summary is rendered", () => {
    expect(EventWrapper.find(".Summary")).toHaveLength(1);
    expect(EventWrapper.find(".Summary").text()).toBe(event.summary);
  });

  test("Start date/time and time zone are rendered", () => {
    expect(EventWrapper.find(".Start")).toHaveLength(1);
    expect(EventWrapper.find(".Start").text()).toBe(
      `${event.start.dateTime} (${event.start.timeZone})`
    );
  });

  test("Event location is rendered", () => {
    expect(EventWrapper.find(".Location")).toHaveLength(1);
    expect(EventWrapper.find(".Location").text()).toBe(
      `@${event.summary} | ${event.location}`
    );
  });

  test("Event details are rendered/hidden", () => {
    EventWrapper.setState({ showDetails: true});
    expect(EventWrapper.find(".Details")).toHaveLength(1);
    EventWrapper.setState({ showDetails: false});
    expect(EventWrapper.find(".Details")).toHaveLength(0);
  });

  test("Clicking 'show details' button changes state", () => {
    EventWrapper.setState({ showDetails: false });
    EventWrapper.find(".Show-details").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(true);
  });

    test("Clicking 'hide details' button changes state", () => {
    EventWrapper.setState({ showDetails: true });
    EventWrapper.find(".Hide-details").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(false);
  });

  test("Event details are rendered correctly", () => {
    EventWrapper.setState({ showDetails: true });
    expect(EventWrapper.find(".Calendar-link").prop("href")).toBe(event.htmlLink);
    expect(EventWrapper.find(".Description").text()).toBe(event.description);
  });

});
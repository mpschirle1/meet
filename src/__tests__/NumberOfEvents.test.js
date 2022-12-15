import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let eventQty, NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents eventQty={eventQty} />);
  });

  test("render text input", () => {
    expect(NumberOfEventsWrapper.find(".NumberOfEvents")).toHaveLength(1);
  });

  test("renders number input correctly", () => {
    const eventQty = NumberOfEventsWrapper.state("eventQty");
    expect(NumberOfEventsWrapper.find(".Quantity").prop("value")).toBe(eventQty);
  });

  test("Default event quantity is 32", () => {
    expect(NumberOfEventsWrapper.find(".Quantity").prop("value")).toBe(32);
  });

  test("change state when number input changes", () => {
    NumberOfEventsWrapper.setState({
      eventQty: 32,
    });
    const eventObject = { target: { value: 2 }};
    NumberOfEventsWrapper.find(".Quantity").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("eventQty")).toBe(2);
  });

});
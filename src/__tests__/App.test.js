import React from "react";
import { shallow, mount } from "enzyme";
import { mockData } from "../mock-data";
import { extractLocations, getEvents } from "../api";
import App from "../App";
import EventList from "../EventList";
import CitySearch from "../CitySearch";
import NumberOfEvents from "../NumberOfEvents";

describe("<App /> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test("render list of events", () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test("render CitySearch", () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test("render NumberOfEvents", () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});

describe("<App /> integration", () => {
  let AppWrapper;

  test("App passes 'events' state as a prop to EventList", () => {
    AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state("events");
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test("App passes 'locations' state as a prop to CitySearch", () => {
    AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state("locations");
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(
      AppLocationsState
    );
    AppWrapper.unmount();
  });

  test("Get list of events matching the selected city", async () => {
    AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state("suggestions");
    const selectedIndex = Math.floor(Math.random() * suggestions.length);
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(
      (event) => event.location === selectedCity
    );
    expect(AppWrapper.state("events")).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test("Get list of all events when 'See all cities' is selected", async () => {
    AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find(".suggestions li");
    await suggestionItems.at(suggestionItems.length - 1).simulate("click");
    const allEvents = await getEvents();
    expect(AppWrapper.state("events")).toEqual(allEvents);
    AppWrapper.unmount();
  });

  test("App passes 'numberOfEvents' state as a prop to NumberOfEvents", () => {
    AppWrapper = mount(<App />);
    const NumberOfEventsState = AppWrapper.state("numberOfEvents");
    expect(NumberOfEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(NumberOfEvents).state("eventQty")).toBe(
      NumberOfEventsState
    );
    AppWrapper.unmount();
  });

  test("numberOfEvents state changes upon user input", async () => {
    AppWrapper = mount(<App />);
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    const input = NumberOfEventsWrapper.find(".Quantity");
    const eventObject = { target: { value: 2 } };
    input.simulate("change", eventObject);
    await getEvents();
    expect(AppWrapper.state("numberOfEvents")).toBe(2);
    expect(NumberOfEventsWrapper.state("eventQty")).toBe(2);
    AppWrapper.unmount();
  });

  test("Correctly render list of events from mockData", async () => {
    AppWrapper = mount(<App />);
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    const eventObject = { target: { value: 1 } };
    await NumberOfEventsWrapper.instance().handleQtyChange(eventObject);
    await getEvents();
    expect(AppWrapper.state("events")).toEqual([mockData[0]]);
    AppWrapper.unmount();
  });
});

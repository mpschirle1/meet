import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  let AppWrapper;
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    given("the application loaded", () => {
      AppWrapper = mount(<App />);
    });
    when("the list of events is displayed", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".Event")).toHaveLength(mockData.length);
    });
    then("the event details should be hidden", () => {
      expect(AppWrapper.find(".Details")).toHaveLength(0);
    });
  });

  test("User can expand an event to see its details.", ({
    given,
    when,
    then,
  }) => {
    given("the event details are hidden", () => {
      expect(AppWrapper.find(".Details")).toHaveLength(0);
    });
    when("the user clicks the 'Show Details' button", () => {
      AppWrapper.find(".Event .Show-details").at(0).simulate("click");
    });
    then("the event's details will be expanded for the user to view", () => {
      expect(AppWrapper.find(".Details")).toHaveLength(1);
    });
  });

  test("User can collapse an event to hide its details.", ({
    given,
    when,
    then,
  }) => {
    given("the event's details are shown", () => {
      expect(AppWrapper.find(".Details")).toHaveLength(1);
    });
    when("the user clicks the 'Hide Details' button", () => {
      AppWrapper.find(".Event .Hide-details").at(0).simulate("click");
    });
    then("the event's details will be collapsed and hidden from view", () => {
      expect(AppWrapper.find(".Details")).toHaveLength(0);
    });
  });
});

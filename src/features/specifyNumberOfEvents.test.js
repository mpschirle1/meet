import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  let AppWrapper, NumberOfEventsWrapper;
  test("When user hasn't specified a number, 32 is the default number.", ({
    given,
    when,
    then,
  }) => {
    given(
      "the user hasn't specified the number of events they want to view",
      () => {
        AppWrapper = mount(<App />);
      }
    );
    when("the events are listed", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".Event")).toHaveLength(mockData.length);
    });
    then("the default number of events displayed should be 32", () => {
      expect(AppWrapper.find(".Event").length).toBeLessThanOrEqual(32);
    });
  });

  test("User can change the number of events they want to see.", ({
    given,
    when,
    then,
  }) => {
    given(
      "the user has specified the number of events they want to view",
      () => {
        const numberOfEvents = { target: { value: 16 } };
        AppWrapper.find(".Quantity").simulate("change", numberOfEvents);
      }
    );
    when("the events are listed", () => {
      AppWrapper.update();
    });
    then(
      "the number of events displayed should not exceed the number specified by the user",
      () => {
        NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        expect(NumberOfEventsWrapper.state("eventQty")).toBe(16);
      }
    );
  });
});

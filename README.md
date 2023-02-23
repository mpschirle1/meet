# Meet Application

## About

A serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

![Application Screenshot](meet_screenshot.png)

#### Link

Meet App (https://mpschirle1.github.io/meet/)

## User Stories

### Feature 1: Filter Events by City

As a user, I should be able to filter events by city so that I can see the list of events that take place in that city.

- **_Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities._**  
  **Given** user hasn’t searched for any city  
  **When** the user opens the app  
  **Then** the user should see a list of all upcoming events

- **_Scenario 2: User should see a list of suggestions when they search for a city._**  
  **Given** the main page is open  
  **When** user starts typing in the city textbox  
  **Then** the user should see a list of cities (suggestions) that match what they’ve typed

- **_Scenario 3: User can select a city from the suggested list._**  
  **Given** the user was typing “Berlin” in the city textbox and the list of suggested cities is showing  
  **When** the user selects a city (e.g., “Berlin, Germany”) from the list  
  **Then** their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

### Feature 2: Show/Hide an Event’s Details

As a user, I should be able to show/hide an event’s details so that I can see more or less details about a particular event.

- **_Scenario 1: An event element is collapsed by default._**  
  **Given** the user selected a city  
  **When** the list of events in the selected city are displayed  
  **Then** the event details should be hidden

- **_Scenario 2: User can expand an event to see its details._**  
  **Given** the event details are hidden  
  **When** the user clicks the "Show Details" button  
  **Then** the event's details will be expanded for the user to view

- **_Scenario 3: User can collapse an event to hide its details._**  
  **Given** the event's details are shown  
  **When** the user clicks the "Hide Details" button  
  **Then** the event's details will be collapsed and hidden from view

### Feature 3: Specify Number of Events

As a user, I should be able to specify the number of events I want to view so that I can customize how many events are displayed at once.

- **_Scenario 1: When user hasn't specified a number, 32 is the default number._**  
  **Given** the user hasn't specified the number of events they want to view  
  **When** the events are listed  
  **Then** the number of events displayed should not exceed 32

- **_Scenario 2: User can change the number of events they want to see._**  
  **Given** the user has specified the number of events they want to view  
  **When** the events are listed  
  **Then** the number of events displayed should not exceed the number specified by the user

### Feature 4: Use the App when Offline

As a user, I should be able to use the app offline so that I can see the events I viewed the last time I was online.

- **_Scenario 1: Show cached data when there's no internet connection._**  
  **Given** the user has no internet connection  
  **When** the user opens the application  
  **Then** the previously viewed events stored in the cache will be displayed

- **_Scenario 2: Show error when user changed the settings (city, time range)._**  
  **Given** the user has no internet connection  
  **When** the user attempts to view data not stored in the cache  
  **Then** an error message will be displayed

### Feature 5: Data Visualization

As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

- **_Scenario 1: Show a chart with the number of upcoming events in each city._**  
  **Given** the user hasn't specified a city  
  **When** the user opens the application  
  **Then** a chart will display the number of upcoming events in each city

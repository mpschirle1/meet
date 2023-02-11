Feature: Show/Hide an Event's Details

  Scenario: An event element is collapsed by default.
    Given the application loaded
    When the list of events is displayed
    Then the event details should be hidden

  Scenario: User can expand an event to see its details.
    Given the event details are hidden
    When the user clicks the 'Show Details' button
    Then the event's details will be expanded for the user to view

  Scenario: User can collapse an event to hide its details.
    Given the event's details are shown
    When the user clicks the 'Hide Details' button
    Then the event's details will be collapsed and hidden from view


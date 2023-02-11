Feature: Specify Number of Events

  Scenario: When user hasn't specified a number, 32 is the default number.
    Given the user hasn't specified the number of events they want to view
    When the events are listed
    Then the default number of events displayed should be 32

  Scenario: User can change the number of events they want to see.
    Given the user has specified the number of events they want to view
    When the events are listed
    Then the number of events displayed should not exceed the number specified by the user

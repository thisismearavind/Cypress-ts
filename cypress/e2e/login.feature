Feature: Login functionality

  Scenario: Successful login with valid credentials
    Given I open the login page
    When I enter valid credentials
    Then I should see the dashboard

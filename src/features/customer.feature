Feature: customer support features

    As a user
    I want to be able to find a way to contact the company

    Scenario: check contact number
        Given I open the marketplace web
        Then the contact number in the header is "0034666666666"

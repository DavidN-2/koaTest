Feature: purchases - user not logged

        As a user
        I want to be able to find the item that I like
        And I want to be able to buy the item

    Scenario: buy an item that was searched in the main page
        Given I open the marketplace web
        When I search "printed" in the search box
        And I select "Printed Chiffon Dress" in the results page
        And I add the item to the cart in the details screen
        Then a confirmation message "Product successfully added to your shopping cart" is shown
        And the item "Printed Chiffon Dress" is shown in the cart confirmation page

Feature: Login PAR in the browser

        As a parent
        I want to login to parents app in the browser
        And I want to see an error when I login with incorrect credentials


    Scenario: Login with a valid user
        When I open the url "/"
        And I expect that element "input[id='search_query_top']" becomes displayed
        And I set "printed" to the inputfield "input[id='search_query_top']"
        And I click on the element "button[name='submit_search']"
        And I expect that element ".right-block a[title='Printed Chiffon Dress']" becomes displayed
        And I click on the element ".right-block a[title='Printed Chiffon Dress']"
        And I expect that element "p[id='add_to_cart'] button" becomes displayed
        And I click on the element "p[id='add_to_cart'] button"
        And I expect that element "i[class='icon-ok']" becomes displayed
        And I click on the element "a[title='Proceed to checkout']"
        And I expect that element ".cart_navigation a[title='Proceed to checkout']" becomes displayed
        And I click on the element ".cart_navigation a[title='Proceed to checkout']"
        # And I expect that element "a[title='Proceed to checkout']" becomes displayed
        # And I click on the element "a[title='Proceed to checkout']"
        And I expect that element "#login_form" becomes displayed
        And I set "ninonano@gmail.com" to the inputfield "input[id='email']"
        And I set "123456" to the inputfield "input[id='passwd']"
        And I click on the element "button[id='SubmitLogin']"
        And I expect that element "button[name='processAddress']" becomes displayed
        And I click on the element "button[name='processAddress']"
        And I expect that element "div[id='uniform-cgv']" becomes displayed
        And I click on the element "div[id='uniform-cgv']"
        And I click on the element "button[name='processCarrier']"
        And I expect that element "a.bankwire" becomes displayed
        And I click on the element "a.bankwire"
        And I expect that element ".cart_navigation button[type='submit']" becomes displayed
        And I click on the element ".cart_navigation button[type='submit']"
        And I expect that element "p[class='cheque-indent'] .dark" becomes displayed
        And I expect that element "p[class='cheque-indent'] .dark" matches the text "Your order on My Store is complete."



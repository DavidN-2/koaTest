import { Then } from '@cucumber/cucumber';
import cartConfirmationPage from '../pages/cartConfirmationPage';
import mainPage from '../pages/mainPage';


Then(/^a confirmation message "([^"]*)?" is shown$/, function (message) {
    cartConfirmationPage.checkConfirmationMessage(message);
});

Then(/^the item "([^"]*)?" is shown in the cart confirmation page$/, function (message) {
    cartConfirmationPage.checkItemInCart(message);
});

Then(/^the contact number in the header is "([^"]*)?"$/, function (number) {
    mainPage.checkContactNumber(number);
});

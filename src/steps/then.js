import { Then } from '@cucumber/cucumber';
import chartConfirmationPage from '../pages/chartConfirmationPage';


Then(/^a confirmation message "([^"]*)?" is shown$/, function (message) {
    chartConfirmationPage.checkConfirmationMessage(message);
});

Then(/^the item "([^"]*)?" is shown in the chart confirmation page$/, function (message) {
    chartConfirmationPage.checkItemInChart(message);
});
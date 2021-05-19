import { When } from '@cucumber/cucumber';
import itemDetailsPage from '../pages/itemDetailsPage';
import mainPage from '../pages/mainPage';
import searchResultsPage from '../pages/searchResultsPage';


When(/^I search "([^"]*)?" in the search box$/, function (searchParameter) {
  mainPage.searchByName(searchParameter);
});

When(/^I select "([^"]*)?" in the results page$/, function (itemName) {
  searchResultsPage.selectItem(itemName);
});

When(/^I add the item to the chart in the details screen$/, function () {
  itemDetailsPage.addToChart();
});
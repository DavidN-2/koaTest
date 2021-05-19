import { Given } from '@cucumber/cucumber';

import mainPage from '../pages/mainPage';



Given(/^I open the marketplace web$/, function () {
  mainPage.goToMainPage();
});





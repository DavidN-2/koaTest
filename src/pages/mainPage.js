import waitForDisplayed  from '../support/action/waitForDisplayed';
import clickElement  from '../support/action/clickElement';
import setInputField  from '../support/action/setInputField';
import openWebsite  from '../support/action/openWebsite';
import checkEqualsText  from '../support/check/checkEqualsText';
 

class mainPage {
  constructor() {
    this.searchBox = `input[id="search_query_top"]`;
    this.searchSubmitButton = `button[name="submit_search"]`; 
    this.contactPhoneNumber = `span[class="shop-phone"] strong`; 
  }

  goToMainPage() {
    var url = browser.options.baseUrl;
    openWebsite('url', url);
  }

  searchByName(name) {
    waitForDisplayed(this.searchBox, true);
    setInputField('set', name, this.searchBox);
    clickElement('click', 'element', this.searchSubmitButton);
  }

  checkContactNumber(number) {
    waitForDisplayed(this.searchBox, true);
    checkEqualsText('element', this.contactPhoneNumber, false, number);
  }
}

export default new mainPage();

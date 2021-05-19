import waitForDisplayed  from '../support/action/waitForDisplayed';
import clickElement  from '../support/action/clickElement';
import setInputField  from '../support/action/setInputField';
import openWebsite  from '../support/action/openWebsite';
 

class mainPage {
  constructor() {
    this.searchBox = `input[id="search_query_top"]`;
    this.searchSubmitButton = `button[name="submit_search"]`;  
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
}

export default new mainPage();

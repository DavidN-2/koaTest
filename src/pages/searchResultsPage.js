import waitForDisplayed  from '../support/action/waitForDisplayed';
import clickElement  from '../support/action/clickElement';
 
class searchResultsPage {
  constructor() {
    this.searchResults = `div[id="center_column"]`;
  }

  selectItem(itemName) {
    waitForDisplayed(this.searchResults, true);
    const item = `.right-block a[title="${itemName}"]`;
    clickElement('click', 'element', item);
  }

}

export default new searchResultsPage();

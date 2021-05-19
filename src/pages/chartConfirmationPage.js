import waitForDisplayed  from '../support/action/waitForDisplayed';
import checkEqualsText  from '../support/check/checkEqualsText';
 
class chartConfirmationPage {
  constructor() {
    this.confirmationMessage = `div[class="layer_cart_product col-xs-12 col-md-6"] h2`;
    this.itemTitle = `span[id="layer_cart_product_title"]`;

    
  }


  checkConfirmationMessage(message) {
    waitForDisplayed(this.confirmationMessage, true);
    checkEqualsText('element', this.confirmationMessage, false, message);
  }

  checkItemInChart(itemName) {
    waitForDisplayed(this.itemTitle, true);
    checkEqualsText('element', this.itemTitle, false, itemName);
  }

}

export default new chartConfirmationPage();

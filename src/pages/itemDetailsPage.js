import waitForDisplayed  from '../support/action/waitForDisplayed';
import clickElement  from '../support/action/clickElement';
 

class itemDetailsPage {
  constructor() {
    this.itemMainImage = `div[id="image-block"]`;
    this.addToCartButton = `p[id="add_to_cart"] button`;
  }

  addToCart() {
    waitForDisplayed(this.itemMainImage, true);
    clickElement('click', 'element', this.addToCartButton);
    
  }

}

export default new itemDetailsPage();

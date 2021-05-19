import waitForDisplayed  from '../support/action/waitForDisplayed';
import clickElement  from '../support/action/clickElement';
 

class itemDetailsPage {
  constructor() {
    this.itemMainImage = `div[id="image-block"]`;
    this.addToChartButton = `p[id="add_to_cart"] button`;
  }


  addToChart() {
    waitForDisplayed(this.itemMainImage, true);
    clickElement('click', 'element', this.addToChartButton);
    
  }

}

export default new itemDetailsPage();

import Page from './Page';
import constants from '../shared/constants';

class AustraliaHomePage extends Page {
  // Page elements
  static get itemMyGov() {
    return browser.element('#nav-item-mygov');
  }

  // Helper Methods
  static doGoogleSearch(value) {
    this.setSearchKey(value);
    this.clickOnSearch();

    return browser.waitUntil(() => this.title().includes(value), constants.BROWSER_WAIT, 'expected the search results page which contains the searched value within wait period');
  }
}

export default AustraliaHomePage;

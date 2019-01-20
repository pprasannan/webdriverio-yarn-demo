import Page from './Page';
import constants from '../shared/constants';

class GoogleHomePage extends Page {
  // Page elements
  static get searchBox() {
    return browser.element('#tsf > div:nth-child(2) > div > div.RNNXgb > div > div.a4bIc > input');
  }

  static get searchButton() {
    return browser.element('#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input[type="submit"]:nth-child(1)');
  }

  // Actions
  static setSearchKey(value) {
    return this.searchBox.setValue(value);
  }

  static clickOnSearch() {
    return this.searchButton.click();
  }

  // Helper Methods
  static doGoogleSearch(value) {
    this.setSearchKey(value);
    this.clickOnSearch();

    return browser.waitUntil(() => this.title().includes(value), constants.BROWSER_WAIT, 'expected the search results page which contains the searched value within wait period');
  }
}

export default GoogleHomePage;

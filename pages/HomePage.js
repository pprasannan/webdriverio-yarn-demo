import Page from './Page';
import constants from '../shared/constants';

class HomePage extends Page {
  // Page elements
  static get searchBox() {
    return browser.element('#lst-ib');
  }

  static get searchButton() {
    return browser.element('input[type="submit"]:nth-child(1)');
  }

  // Actions
  static setSearchKey(value) {
    return this.searchBox.setValue(value);
  }

  static clickOnSearch() {
    return this.searchButton.click();
  }

  // Browser helper methods
  static title() {
    return browser.getTitle();
  }

  // Helper Methods
  static doGoogleSearch(value) {
    this.setSearchKey(value);
    this.clickOnSearch();

    return browser.waitUntil(() => this.title().includes(value), constants.BROWSER_WAIT, 'expected the search results page which contains the searched value within wait period');
  }
}

export default HomePage;

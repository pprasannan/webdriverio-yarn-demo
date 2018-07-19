import Page from '../pages/Page';

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
  static doASearch(value) {
    this.setSearchKey(value);
    this.clickOnSearch();

    return browser.waitUntil(() => this.title().includes(value), 3000, 'expected the search results page which contains the searched value within wait period');
  }
}

export default HomePage;

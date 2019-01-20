import Page from './Page';
import constants from '../shared/constants';

class AustraliaHomePage extends Page {
  // Page elements
  static get itemMyGov() {
    return browser.element('#nav-item-mygov');
  }

  static get userIdField() {
    return browser.element('#userId');
  }

  // Helper Methods
  static clickOnMyGov() {
    this.itemMyGov.click();

    return browser.waitUntil(() => this.userIdField.isVisible() === true, constants.BROWSER_WAIT, 'expected the page to show the login text field');
  }
}

export default AustraliaHomePage;

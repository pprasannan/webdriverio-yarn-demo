import Page from '../pages/Page';

class HomePage extends Page {
  static title() {
    return browser.getTitle();
  }
}

export default HomePage;

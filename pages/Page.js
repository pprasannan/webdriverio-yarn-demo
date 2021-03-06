/**
 * @class Page
 */
class Page {
  static open(path = '') {
    browser.windowHandleSize({ width: 1280, height: 960 });
    browser.url(`/${path}`);
  }

  static openUrl(path) {
    browser.windowHandleSize({ width: 1280, height: 960 });
    browser.url(path);
  }

  static title() {
    return browser.getTitle();
  }
}

export default Page;

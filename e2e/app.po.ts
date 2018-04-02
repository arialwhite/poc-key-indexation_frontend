import { browser, by, element } from 'protractor';

export class IndexerFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ind-root h1')).getText();
  }
}

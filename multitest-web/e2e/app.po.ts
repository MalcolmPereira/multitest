import { browser, by, element } from 'protractor';

export class HomePage {

  navigateTo() {
    return browser.get('/');
  }

  getAppTitle() {
    return element(by.css('app-header h3')).getText();
  }
}

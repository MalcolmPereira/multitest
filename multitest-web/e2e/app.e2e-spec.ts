import { HomePage } from './app.po';

describe('Multitest Web App', () => {

  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('Should display app titkle ', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('MultiTest');
  });

});

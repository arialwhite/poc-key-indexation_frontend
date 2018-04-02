import { IndexerFrontendPage } from './app.po';

describe('indexer-frontend App', () => {
  let page: IndexerFrontendPage;

  beforeEach(() => {
    page = new IndexerFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ind!!');
  });
});

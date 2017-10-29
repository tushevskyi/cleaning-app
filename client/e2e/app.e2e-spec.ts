import { CleaningAppPage } from './app.po';

describe('cleaning-app App', () => {
  let page: CleaningAppPage;

  beforeEach(() => {
    page = new CleaningAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

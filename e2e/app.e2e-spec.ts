import { ServiceprojectPage } from './app.po';

describe('serviceproject App', () => {
  let page: ServiceprojectPage;

  beforeEach(() => {
    page = new ServiceprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

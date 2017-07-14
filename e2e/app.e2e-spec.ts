import { VacationSearchPage } from './app.po';

describe('vacation-search App', () => {
  let page: VacationSearchPage;

  beforeEach(() => {
    page = new VacationSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

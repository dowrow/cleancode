import { BadCodePage } from './app.po';

describe('bad-code App', () => {
  let page: BadCodePage;

  beforeEach(() => {
    page = new BadCodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

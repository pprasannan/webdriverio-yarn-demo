import { expect } from 'chai';
import HomePage from '../pages/HomePage';

describe('Google Tests', () => {
  it('should open the Google homepage with the expected title', () => {
    HomePage.open();
    expect(HomePage.title()).to.equal('Google');
  });

  it('should do a search to get results', () => {
    HomePage.doGoogleSearch('sydney');
    expect(HomePage.title()).to.equal('sydney - Google Search');
  });
});

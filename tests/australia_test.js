import { expect } from 'chai';
import HomePage from '../pages/AustraliaHomePage';
import constant from '../shared/constants';

describe('Australian Government Tests', () => {
  it('should open the Aus Govt homepage with the expected title', () => {
    HomePage.openUrl(constant.AU_HOMEPAGE);
    expect(HomePage.title()).to.equal('australia.gov.au');
  });

  it('should open myGov login page', () => {
    HomePage.clickOnMyGov();
    expect(HomePage.title()).to.equal('Sign-in - myGov');
  });
});

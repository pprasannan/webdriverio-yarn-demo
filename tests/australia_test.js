import { expect } from 'chai';
import HomePage from '../pages/AustraliaHomePage';

describe('Australian Government Tests', () => {
  it('should open the Aus Govt homepage with the expected title', () => {
    HomePage.openUrl('http://australia.gov.au/');
    expect(HomePage.title()).to.equal('australia.gov.au');
  });
});

import { expect } from 'chai';
import HomePage from '../pages/HomePage';

describe('Homepage test', () => {
  it('should open the Google homepage with the expected title', () => {
    HomePage.open();

    expect(HomePage.title()).to.equal('Google');
  });
});

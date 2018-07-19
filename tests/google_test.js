import { expect } from 'chai';
import HomePage from '../pages/HomePage';

describe('Homepage test', () => {
  it('should open the homepage with the correct title', () => {
    HomePage.open();

    expect(HomePage.title()).to.equal('Google');
  });
});

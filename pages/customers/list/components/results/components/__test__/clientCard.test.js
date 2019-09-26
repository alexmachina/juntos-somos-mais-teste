import React from 'react';
import ClientCard from '../clientCard';
import renderer from 'react-test-renderer';

describe('Components', () => {
  describe('ClientCard', () => {
    it('Renders correctly' , () => {
      const tree = renderer.create(<ClientCard />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
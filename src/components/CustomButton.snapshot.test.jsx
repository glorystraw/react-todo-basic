import React from 'react';
import renderer from 'react-test-renderer';
import CustomButton from './CustomButton';

test('Snapshot testing enabled Button component', () => {
  const tree = renderer.create(<CustomButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

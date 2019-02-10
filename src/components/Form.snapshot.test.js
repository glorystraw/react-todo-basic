import React from 'react';
import renderer from 'react-test-renderer';
import Form from './Form';

test('Snapshot testing enabled Button component', () => {
  const tree = renderer.create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});
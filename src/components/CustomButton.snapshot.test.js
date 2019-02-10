import React from 'react';
import renderer from 'react-test-renderer';
import CustomButton from './CustomButton';

describe('Snapshot test for Custom buttom', () => {
  test('Snapshot test for CustomButton renders as icon', () => {
    const tree = renderer.create(<CustomButton className={'material-icons'} onClick={() => { }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Snapshot test for CustomButton renders as text', () => {
    const tree = renderer.create(<CustomButton onClick={() => { }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import Card from '.';

describe('<Card />', () => {
  it('renderizar sem quebrar', () => {
    const rendered = renderer.create(<Card content={<Text>My test</Text>} />).toJSON();
    expect(rendered).toBeTruthy();
  });
});

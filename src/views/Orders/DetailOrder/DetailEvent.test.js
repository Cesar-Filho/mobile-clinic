import React from 'react';
import renderer from 'react-test-renderer';

import DetailEvent from '.';

describe('<DetailEvent />', () => {
  it('renderizar sem quebrar', () => {
    const rendered = renderer.create(<DetailEvent />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});

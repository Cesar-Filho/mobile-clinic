import React from 'react';
import renderer from 'react-test-renderer';

import ListEvents from '.';

describe('<ListEvents />', () => {
  it('renderizar sem quebrar', () => {
    const rendered = renderer.create(<ListEvents />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});

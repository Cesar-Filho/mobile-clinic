import React from 'react';
import renderer from 'react-test-renderer';

import { Drawer } from '.';

describe('<Drawer />', () => {
  it('renderizar sem quebrar', () => {
    const rendered = renderer.create(<Drawer />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});

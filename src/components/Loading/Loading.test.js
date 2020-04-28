import React from 'react';
import renderer from 'react-test-renderer';

import { Loading } from '.';

describe('<Loading />', () => {
  it('renderizar sem quebrar', () => {
    const rendered = renderer.create(<Loading count={1} />).toJSON();
    expect(rendered).toBeTruthy();
  });
});

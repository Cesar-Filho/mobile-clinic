import React from 'react';
import renderer from 'react-test-renderer';

import Button from '.';

describe('<Button />', () => {
  it('renderizar sem quebrar', () => {
    const rendered = renderer
      .create(<Button label="foo" onPress={() => 'clicked here'} />)
      .toJSON();
    expect(rendered).toBeTruthy();
  });
});

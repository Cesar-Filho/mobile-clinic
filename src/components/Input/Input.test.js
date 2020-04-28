import React from 'react';
import renderer from 'react-test-renderer';

import Input from '.';

describe('<Input />', () => {
  it('renderizar sem quebrar', () => {
    const rendered = renderer
      .create(
        <Input
          label={'bar'}
          autoFocus={false}
          input={{
            onChange: () => {},
            onDragStart: () => {},
            onDrop: () => {},
            value: () => {},
            name: () => {},
          }}
        />,
      )
      .toJSON();
    expect(rendered).toBeTruthy();
  });
});

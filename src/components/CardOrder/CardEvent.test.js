import React from 'react';
import renderer from 'react-test-renderer';

import Card from '.';

describe('<Card />', () => {
  it('renderizar sem quebrar', () => {
    const rendered = renderer
      .create(<Card title="myTest" event="myEvent" time="myTime" dateTime="myDateTime" />)
      .toJSON();
    expect(rendered).toBeTruthy();
  });
});

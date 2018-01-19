import React from 'react';
import { shallow } from 'enzyme';
import { StaticRouter } from 'react-router-dom';

import Navigation from '../Navigation';

test('the component mounts with defaults', () => {
  const wrapper = shallow(
    <StaticRouter location="/" context={{}}>
      <Navigation />
    </StaticRouter>
  );

  expect(wrapper).toMatchSnapshot();
});

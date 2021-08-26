import React from 'react';
import {mountWithApp} from 'test-utilities';

import {Indicator} from '../Indicator';

describe('<Indicator />', () => {
  describe('accessibilityLabel', () => {
    it('renders a span', () => {
      const indicator = mountWithApp(<Indicator />);
      expect(indicator).toContainReactComponentTimes('span', 1);
    });
  });
});

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import __NAME__ from '__COMP_PATH__/__NAME__';

describe('<__NAME__ />', () => {

  it('should render', () => {
    expect(shallow(<__NAME__ />)).to.have.length(1);
  });

});

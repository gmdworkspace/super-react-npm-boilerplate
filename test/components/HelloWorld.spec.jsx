import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import HelloWorld from 'src/components/HelloWorld/HelloWorld';

describe('HelloWorld', () => {
  let props;

  beforeEach(() => {
    props = {
      title: 'HI',
      description: 'This is a sample description'
    };
  });

  it('should render', () => {
    const component = shallow(<HelloWorld {...props} />);
    expect(component.length).to.eq(1);
    expect(component.find('.title').text()).to.eq(props.title);
  });

  it('should render description depending upon showDescription prop', () => {
    props.showDescription = true;
    const component = shallow(<HelloWorld {...props}/>);
    expect(component.find('.description').length).to.eq(1);
    expect(component.find('.description').text()).to.eq(props.description);
  });

});

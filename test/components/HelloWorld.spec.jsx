import React from 'react';
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

  test('should render', () => {
    const component = shallow(<HelloWorld {...props} />);
    expect(component).toHaveLength(1);
    expect(component.find('.title').text()).toEqual(props.title);
  });

  test('should render description depending upon showDescription prop', () => {
    props.showDescription = true;
    const component = shallow(<HelloWorld {...props}/>);
    expect(component.find('.description')).toHaveLength(1);
    expect(component.find('.description').text()).toEqual(props.description);
  });

});

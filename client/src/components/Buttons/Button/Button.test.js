import React from 'react';
import { shallow } from 'enzyme';

import toJson from 'enzyme-to-json';
import Button from './Button';

describe('Button', () => {
  let wrapper;
  const mocks = {};

  beforeEach(() => {
    wrapper = null;

    mocks.props = {
      disabled: false,
      handleClick: jest.fn(),
    }
  });

  it('should render correctly', () => {
    wrapper = shallow(<Button {...mocks.props}  />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render disabled', () => {
    mocks.props.disabled = true;
    wrapper = shallow(<Button {...mocks.props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call handleCLick', () => {
    wrapper = shallow(<Button {...mocks.props} />);
    wrapper.find('button').simulate('click');
    expect(mocks.props.handleClick).toBeCalled();
  });
});
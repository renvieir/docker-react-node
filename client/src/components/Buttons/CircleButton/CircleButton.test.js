import React from 'react';
import { shallow } from 'enzyme';

import toJson from 'enzyme-to-json';
import CircleButton from './CircleButton';

describe('CircleButton', () => {
  let wrapper;
  const mocks = {};

  beforeEach(() => {
    wrapper = null;

    mocks.props = {
      disabled: false,
      handleClick: jest.fn(),
    }
  });

  it('should render plus icon as default', () => {
    wrapper = shallow(<CircleButton {...mocks.props}  />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render minus icon', () => {
    mocks.props.minus = true;
    wrapper = shallow(<CircleButton {...mocks.props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render disabled', () => {
    mocks.props.disabled = true;
    wrapper = shallow(<CircleButton {...mocks.props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call handleCLick', () => {
    wrapper = shallow(<CircleButton {...mocks.props} />);
    wrapper.find('button').simulate('click');
    expect(mocks.props.handleClick).toBeCalled();
  });
});
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';
import PasswordField from './PasswordField';

const muiTheme = getMuiTheme();

const wrapper = mount(<PasswordField id="hello" name="world" />, {
  context: { muiTheme },
  childContextTypes: { muiTheme: PropTypes.object },
});

it('renders without crashing', () => {
  expect(wrapper.props().id).to.equal("hello");
  expect(wrapper.props().name).to.equal("world");
  expect(wrapper.state().visibility).to.equal(false);
  expect(wrapper.state().inputType).to.equal('password');

  expect(wrapper.find("input[type='text']").length).to.equal(0);
  expect(wrapper.find("input[type='password']").length).to.equal(1);
});

it('toggle visibility', () => {
  // Click to toggle visibility
  wrapper.find('svg').simulate('click')

  expect(wrapper.props().id).to.equal("hello");
  expect(wrapper.props().name).to.equal("world");
  expect(wrapper.state().visibility).to.equal(true);
  expect(wrapper.state().inputType).to.equal('text');

  expect(wrapper.find("input[type='text']").length).to.equal(1);
  expect(wrapper.find("input[type='password']").length).to.equal(0);
});

import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';
import PasswordField from './PasswordField';

const muiTheme = getMuiTheme();

it('renders without crashing', () => {
  const wrapper = mount(<PasswordField id="hello" name="world" />, {
    context: { muiTheme },
    childContextTypes: { muiTheme: PropTypes.object },
  });

  expect(wrapper.find("input").length).to.equal(1);
  expect(wrapper.props().id).to.equal("hello");
  expect(wrapper.props().name).to.equal("world");
  expect(wrapper.state().visibility).to.equal(false);
  expect(wrapper.state().inputType).to.equal('password');
});

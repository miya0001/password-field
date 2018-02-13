import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PasswordField from './PasswordField';

it('renders without crashing', () => {
  const wrapper = mount(<MuiThemeProvider><PasswordField id="hello" name="world" /></MuiThemeProvider>);
  expect(wrapper.find("input").length).to.equal(1);
  // `<PasswordField />` is one of the children for `<MuiThemeProvider />`.
  // So it needs `.children.props` to get props.
  expect(wrapper.props().children.props.id).to.equal("hello");
  expect(wrapper.props().children.props.name).to.equal("world");
});

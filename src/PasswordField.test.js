import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PasswordField from './PasswordField';

// See https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MuiThemeProvider><PasswordField id="password" /></MuiThemeProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

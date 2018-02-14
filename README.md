# PasswordField

[![Build Status](https://travis-ci.org/miya0001/password-field.svg?branch=master)](https://travis-ci.org/miya0001/password-field)

`<PasswordField />` component for [React](https://reactjs.org/) + [Material-UI](http://www.material-ui.com/#/).

![](screenshot.gif)

## Install

```
$ npm install password-field --save
```

## Requires

* React 16.x
* Material-UI

## Usage

```javascript
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PasswordField from 'password-field'

class MyComponent extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <PasswordField
          id="password"
          hintText="Password"
          fullWidth={ true }
          iconColor="#ffffff"
        />
      </MuiThemeProvider>
    );
  }
}
```

## Properties

All properties of [TextField](http://www.material-ui.com/#/components/text-field) will be supported.

And also, `PasswordField` has following custom properties.

* iconColor - The color of icon to toggle visibility. It will be passed to [SVG Icon](http://www.material-ui.com/#/components/svg-icon) as the `color` property.
* iconStyle - The style of icon to toggle visibility. It will be passed to [SVG Icon](http://www.material-ui.com/#/components/svg-icon) as the `style` property.

## License

MIT

import React, { Component } from 'react';
import { TextField } from 'material-ui';
import Show from 'material-ui/svg-icons/action/visibility';
import Hide from 'material-ui/svg-icons/action/visibility-off';

class PasswordField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
      inputType: "password",
    };
  }

  toggleVisibility = () => {
    if (this.state.visibility) {
      this.setState({
        visibility: false,
        inputType: "password",
      })
    } else {
      this.setState({
        visibility: true,
        inputType: "text",
      })
    }
  }

  render() {
    const iconStyle = {
      position: 'absolute',
      top: "50%",
      right: "0",
      transform: "translateY(-50%)",
      cursor: "pointer",
      ...this.props.iconStyle
    }

    let icon = <Hide className="hide" color={this.props.iconColor} style={iconStyle} onClick={this.toggleVisibility} />
    if (this.state.visibility) {
      icon = <Show className="visible" color={this.props.iconColor} style={iconStyle} onClick={this.toggleVisibility} />
    }

    const props = {...this.props}
    delete props.iconColor
    delete props.iconStyle
    props.style = {
      boxSizing: "border-box",
      paddingRight: "30px",
      ...this.props.style
    }

    return (
      <div style={{position: "relative"}}>
        <TextField
          {...props}
          type={this.state.inputType}
        />
        {icon}
      </div>
    );
  }
}

export default PasswordField;

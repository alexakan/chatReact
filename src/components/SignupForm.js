import React from 'react';
import { withStyles } from 'material-ui';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
  signUpButton: {
    marginTop: theme.spacing.unit * 2,
  }
})

class SignupForm extends React.Component {
  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
    repeatedPassword: {
      value: '',
      isValid: true,
    },
  }

  validate = () => {
    const { password, repeatedPassword } = this.state;
    const isValid = password.value === repeatedPassword.value;

    this.setState({
      password: { ...password, isValid },
      repeatedPassword: { ...repeatedPassword, isValid },
    });

    return isValid;
  }

  handleInputChange = (event) => {
    event.persist();
    const {name, value} = event.target;
    this.setState((prevState) => ({
        [name] : {
          ...prevState[name],
          value,
        }
      })
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.validate()) {
      return;
    } 

    const { username, password } = this.state;

    console.log('Sign up:', username.value, password.value);

    // ...
  }

  render() {
    const { classes } = this.props;
    const { username, password, repeatedPassword } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          required
          fullWidth
          label="Username"
          placeholder="Type your username..."
          type="text"
          margin="normal"
          autoComplete="username"
          name="username"
          value={username.value}
          onChange={this.handleInputChange}
          error={!username.isValid}
        />
        <TextField
          required
          fullWidth
          label="Password"
          placeholder="Type your username..."
          type="password"
          margin="normal"
          autoComplete="new-password"
          name="password"
          value={password.value}
          onChange={this.handleInputChange}
          error={!password.isValid}
        />
         <TextField
          required
          fullWidth
          label="Repeat password"
          placeholder="Type your username..."
          type="password"
          margin="normal"
          autoComplete="new-password"
          name="repeatedPassword"
          value={repeatedPassword.value}
          onChange={this.handleInputChange}
          error={!repeatedPassword.isValid}
        />
        <Button
          fullWidth
          variant="raised"
          type="submit"
          color="primary"
          className={classes.signUpButton}
        >
          Signup
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(SignupForm);

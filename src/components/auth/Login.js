import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';
import LoginForm from './forms/LoginForm';

class Login extends React.Component {
  state = {
    user: {
      email: '',
      password: ''
    }
  };

  handleChange = ({ target: { name, value }}) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/login', this.state.user)
      .then(res => {
        Auth.setToken(res.data.token);
        this.props.history.push('/users');
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <LoginForm
        user={this.state.user}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Login;

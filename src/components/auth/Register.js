import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';
import RegisterForm from './forms/RegisterForm';

class Register extends React.Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      avatar: '',
      image: '',
      bio: '',
      genre: '',
      location: '',
      type: '',
      skillLevel: '',
      socialLinks: {
        facebook: '',
        instagram: '',
        twitter: ''
      }
    }
  };

  handleChange = ({ target: { name, value }}) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/register', this.state.user)
      .then(res => {
        Auth.setToken(res.data.token);
        this.props.history.push('/users');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <RegisterForm
        user={this.state.user}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Register;

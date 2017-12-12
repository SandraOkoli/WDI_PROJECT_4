import React from 'react';
import Axios from 'axios';

import UserEditForm from './UserEditForm';

class UserEdit extends React.Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      avatar: '',
      image: '',
      bio: '',
      type: '',
      genre: '',
      location: '',
      skillLevel: ''
    }
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

handleChange = ({ target: { name, value } }) => {
  const user = Object.assign({}, this.state.user, { [name]: value });
  this.setState({ user });
}

handleSubmit = (e) => {
  e.preventDefault();

  Axios
    .put(`/api/users/${this.props.match.params.id}`, this.state.user)
    .then(() => this.props.history.push(`/users/${this.props.match.params.id}`))
    .catch(err => console.log(err));
}

render() {
  return(
    <UserEditForm
      user={this.state.user}
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
    />
  );
}
}

export default UserEdit;

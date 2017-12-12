import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';

class FriendsNew extends React.Component {
  state = {
    friends: []
  }

  componentWillMount() {
    Axios
      .post(`/api/users/${this.props.match.params.id}/friends`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
    console.log(this.state.users);

  }

  sendRequest = () => {

  }

  render() {
    return (

    );
  }

  }
}

export default FriendsNew;

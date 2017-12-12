import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';

class ChatsCreate extends React.Component {
  state = {
    chat: {
      users: []
    },
    friends: []
  }

  componentDidMount() {
    const currentUserId = Auth.getPayload().userId;
    // console.log(currentUserId);

    Axios
      .get(`/api/users/${currentUserId}/friends`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <h1>Create chat</h1>
    );
  }
}

export default ChatsCreate;

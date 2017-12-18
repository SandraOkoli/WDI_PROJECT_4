import React from 'react';
// import Axios from 'axios';

import Auth from '../../lib/Auth';


class ChatsCreate extends React.Component {
  state = {
    chat: {
      users: []
    },
    friends: []
  }

  componentDidMount() {
    const currentUserId = Auth.getPayload();

    console.log(currentUserId);
  }

  render() {
    return(
      <form>

      </form>
    );
  }
}

export default ChatsCreate;
